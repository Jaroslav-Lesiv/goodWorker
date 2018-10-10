import { all, takeLatest } from 'redux-saga/effects';
// import store from '../redux/store'

import * as action from '../redux/actions';
import * as user from './user';
import * as task from './task';

// APP
function* userLoginWorker() {
	yield takeLatest(action.user.login, user.setUsernameToLocalStorage);
}
function* appStartedWorker() {
	yield takeLatest(action.app.start, user.checkUserBeLogged);
}
// APP END

// TASK
function* fetchDoneTask() {
	yield takeLatest(action.task.doneTask, task.moveTaskToDone);
}
// TASK END

export default function* rootSaga() {
	yield all([appStartedWorker(), userLoginWorker(), fetchDoneTask()]);
}
