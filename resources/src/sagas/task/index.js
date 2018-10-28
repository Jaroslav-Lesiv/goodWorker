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
		let doneList = storage.get('doneList');
		let avaibleList = storage.get('avaibleList');
		const task = avaibleList.find(task => task.id === payload);
		if (task) {
			avaibleList = avaibleList.filter(task => task.id !== payload);
			doneList = [task, ...doneList];

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

function* checkActiveTask({payload = 1}) {
	try {
		const activeId = yield taskContext.getActiveTask();
		if (activeId) {
			const task = yield taskContext.getAvaibleTask(activeId);
			// console.log({activeId, task});
			const updatedTask = yield taskWorker.updateTask({task, period: payload});
			yield taskContext.updateAvaibleTask({ task: updatedTask });
			yield put(action.task.avaibleList.request.pending());
		}
		
		yield delay(TASK.PERIOD[payload]);
		yield put(action.task.checkActiveTask(payload));
	} catch (error) {
		console.warn(error);
		yield delay(TASK.PERIOD[payload]);
		yield put(action.task.checkActiveTask(payload));
	}

}

function* activateTask({payload}) {
	try {
		const task = yield taskContext.getAvaibleList(payload);
		if (task) {
			taskContext.activateTask(payload);
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

export { moveTaskToDone, getAvaibleList, getDoneList, moveTaskToAvaible, checkActiveTask, activateTask, getActive };
