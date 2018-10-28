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
	yield takeEvery(action.app.init, function* () {
		yield put(action.user.checkUser());
		yield put(action.task.checkActiveTask());
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
	yield takeLatest(action.task.backTask, task.moveTaskToAvaible);
}

function* fetchGetAvaibleList() {
	yield takeLatest(
		action.task.avaibleList.request.pending,
		task.getAvaibleList
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

// TASK END

export default function* rootSaga() {
	yield all([
		fetchInitWorker(),
		userLoginWorker(),
		fetchDoneTask(),
		fetchGetAvaibleList(),
		fetchGetDoneList(),
		fetchBackTask(),
		fetchCheckActiveTask(),
		fetchCheckUser(),
		fetchActivateTask(),
		fetchGetActiveTask()
	]);
}
