import { all, takeLatest, takeEvery, put } from 'redux-saga/effects';
// import store from '../redux/store'

import * as action from '../redux/actions';
import * as user from './user';
import * as task from './task';

// APP
function* userLoginWorker() {
	yield takeLatest(action.user.login, user.setUsernameToLocalStorage);
}
function* fetchInitWorker() {
	yield takeEvery(action.app.init, function*() {
		yield put(action.user.checkUser());
		yield put(action.task.checkActiveTask({ period: 1, increment: 0 }));
		yield put(action.task.activeTask.request.pending());
	});
}
// APP END

// USER
function* fetchCheckUser() {
	yield takeLatest(action.user.checkUser, user.checkUserBeLogged);
}
// USER END

// TASK
function* fetchDoneTask() {
	yield takeLatest(action.task.doneTask, task.moveTaskToDone);
}
function* fetchBackTask() {
	yield takeLatest(action.task.backTask, task.moveTaskToAvailable);
}

function* fetchGetAvailableList() {
	yield takeLatest(
		action.task.availableList.request.pending,
		task.getAvailableList
	);
}

function* fetchGetDoneList() {
	yield takeLatest(action.task.doneList.request.pending, task.getDoneList);
}

function* fetchGetActiveTask() {
	yield takeLatest(action.task.activeTask.request.pending, task.getActive);
}

function* fetchCheckActiveTask() {
	yield takeLatest(action.task.checkActiveTask, task.checkActiveTask);
}

function* fetchActivateTask() {
	yield takeLatest(action.task.activateTask, task.activateTask);
}

function* fetchStopTask() {
	yield takeLatest(action.task.stopTask, task.stopTask);
}

// TASK END

export default function* rootSaga() {
	yield all([
		fetchInitWorker(),
		userLoginWorker(),
		fetchDoneTask(),
		fetchGetAvailableList(),
		fetchGetDoneList(),
		fetchBackTask(),
		fetchCheckActiveTask(),
		fetchCheckUser(),
		fetchActivateTask(),
		fetchGetActiveTask(),
		fetchStopTask()
	]);
}
