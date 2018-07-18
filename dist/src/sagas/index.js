import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';

import * as action from '../redux/actions';
import * as background from './background'
import * as task from './task'
// AUTH
function* createTask() {
    yield console.log('task created')
}

function* fetchWorksWorker() {
	yield takeLatest(action.task.taskSetOne, createTask)
}


function* fetchAddTaskWorker() {
	yield takeEvery(action.task.addTask, background.addTask)
}
function* fetchDeleteTaskWorker() {
	yield takeEvery(action.task.deleteTask, background.deleteTask)
}
function* fetchUpdateTaskWorker() {
	yield takeEvery(action.task.updateTask, background.updateTask)
}
function* fetchActivateTaskWorker() {
	yield takeEvery(action.task.activateTask, background.activateTask)
}
function* fetchDisableTaskWorker() {
	yield takeEvery(action.task.disableTask, background.disableTask)
}

export default function* rootSaga() {
	yield all([
		fetchWorksWorker(),

		fetchAddTaskWorker(),
		fetchDeleteTaskWorker(),
		fetchUpdateTaskWorker(),
		fetchActivateTaskWorker(),
		fetchDisableTaskWorker()

	])
  }
