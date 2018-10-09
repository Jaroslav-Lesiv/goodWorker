import { all, takeLatest } from 'redux-saga/effects';
// import store from '../redux/store'

import * as action from '../redux/actions';
import * as user from './user';

function* userLoginWorker() {
	yield takeLatest(action.user.login, user.setUsernameToLocalStorage);
}
function* appStartedWorker() {
	yield takeLatest(action.app.start, user.checkUserBeLogged);
}

export default function* rootSaga() {
	yield all([appStartedWorker(), userLoginWorker()]);
}
