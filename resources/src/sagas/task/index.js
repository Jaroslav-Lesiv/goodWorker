import { put } from 'redux-saga/effects';
import storage from '../../config/localStore';
import * as action from '../../redux/actions';
import taskWorker from '../../redux/workers/tasks';
import taskContext from '../../redux/context/tasks';
// import tasksSelector from '../../redux/selectors/tasks';
import { delay } from 'redux-saga';
import { TASK } from '../../constants';

function* moveTaskToDone({ payload }) {
	try {
		let doneList = yield taskContext.getDoneList();
		let avaibleList = yield taskContext.getAvaibleList();
		const activeId = yield taskContext.getActiveTask();
		const task = avaibleList.find(task => task.id === payload);
		if (task) {
			avaibleList = avaibleList.filter(task => task.id !== payload);
			doneList = [task, ...doneList];

			if (activeId === task.id) yield put(action.task.stopTask());
			yield put(action.task.avaibleList.request.success(avaibleList));

			storage.set('doneList', doneList);
			storage.set('avaibleList', avaibleList);
		} else {
			yield put(action.task.avaibleList.request.failed('Not found'));
		}
	} catch (error) {
		yield put(action.task.avaibleList.request.failed(error));
	}
}

function* moveTaskToAvaible({ payload }) {
	try {
		let doneList = storage.get('doneList');
		let avaibleList = storage.get('avaibleList');
		const task = doneList.find(task => task.id === payload);
		if (task) {
			doneList = doneList.filter(task => task.id !== payload);
			avaibleList = [task, ...avaibleList];

			yield put(action.task.doneList.request.success(doneList));

			storage.set('doneList', doneList);
			storage.set('avaibleList', avaibleList);
		} else {
			yield put(action.task.doneList.request.failed('Not found'));
		}
	} catch (error) {
		yield put(action.task.doneList.request.failed(error));
	}
}

function* getAvaibleList() {
	const avaibleList = storage.get('avaibleList');
	yield put(action.task.avaibleList.request.success(avaibleList));
}
function* getDoneList() {
	const doneList = storage.get('doneList');
	yield put(action.task.doneList.request.success(doneList));
}

function* checkActiveTask({payload}) {
	let { period = 1, increment } = payload;
	if (increment === undefined) increment = period;
	try {
		const activeId = yield taskContext.getActiveTask();
		if (activeId) {
			const task = yield taskContext.getAvaibleTask(activeId);
			const updatedTask = yield taskWorker.updateTask({task, period: increment});
			yield taskContext.updateAvaibleTask({ task: updatedTask });
			yield put(action.task.avaibleList.request.pending());
		}
		
		yield delay(TASK.PERIOD[period]);
		yield put(action.task.checkActiveTask({ period }));
	} catch (error) {
		console.warn(error);
		yield delay(TASK.PERIOD[period]);
		yield put(action.task.checkActiveTask({period}));
	}

}

function* activateTask({payload}) {
	try {
		const task = yield taskContext.getAvaibleList(payload);
		if (task) {
			yield taskContext.activateTask(payload);
			yield put(action.task.activeTask.request.pending());
			yield put(action.task.checkActiveTask({period: 1, increment: 0}));
		}
	} catch (error) {
		console.warn(error);
	}
}

function* getActive() {
	try {
		const id = yield taskContext.getActiveTask();
		yield put(action.task.activeTask.request.success({ id })); 
	} catch (error) {
		console.warn(error);
		yield put(action.task.activeTask.request.failed(error));
	}
}

function* stopTask() {
	try {
		yield taskContext.stopTask();
		yield put(action.task.activeTask.request.pending());
	} catch (error) {
		console.warn(error);
	}
}

export { 
	moveTaskToDone, getAvaibleList, getDoneList, moveTaskToAvaible,
	checkActiveTask, activateTask, getActive, stopTask
};
