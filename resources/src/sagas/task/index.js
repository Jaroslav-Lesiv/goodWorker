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
		let availableList = yield taskContext.getAvailableList();
		const activeId = yield taskContext.getActiveTask();
		const task = availableList.find(task => task.id === payload);
		if (task) {
			availableList = availableList.filter(task => task.id !== payload);
			doneList = [task, ...doneList];

			if (activeId === task.id) yield put(action.task.stopTask());
			yield put(action.task.availableList.request.success(availableList));

			storage.set('doneList', doneList);
			storage.set('availableList', availableList);
		} else {
			yield put(action.task.availableList.request.failed('Not found'));
		}
	} catch (error) {
		yield put(action.task.availableList.request.failed(error));
	}
}

function* moveTaskToAvailable({ payload }) {
	try {
		let doneList = storage.get('doneList');
		let availableList = storage.get('availableList');
		const task = doneList.find(task => task.id === payload);
		if (task) {
			doneList = doneList.filter(task => task.id !== payload);
			availableList = [task, ...availableList];

			yield put(action.task.doneList.request.success(doneList));

			storage.set('doneList', doneList);
			storage.set('availableList', availableList);
		} else {
			yield put(action.task.doneList.request.failed('Not found'));
		}
	} catch (error) {
		yield put(action.task.doneList.request.failed(error));
	}
}

function* getAvailableList() {
	const availableList = storage.get('availableList');
	yield put(action.task.availableList.request.success(availableList));
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
			const task = yield taskContext.getAvailableTask(activeId);
			const updatedTask = yield taskWorker.updateTask({task, period: increment});
			yield taskContext.updateAvailableTask({ task: updatedTask });
			yield put(action.task.availableList.request.pending());
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
		const task = yield taskContext.getAvailableList(payload);
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
	moveTaskToDone, getAvailableList, getDoneList, moveTaskToAvailable,
	checkActiveTask, activateTask, getActive, stopTask
};
