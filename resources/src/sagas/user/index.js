import { put } from 'redux-saga/effects';

import * as action from '../../redux/actions';

function* setUsernameToLocalStorage({ payload }) {
	yield localStorage.setItem('username', payload.username);
}
function* checkUserBeLogged() {
	const username = localStorage.getItem('username');
	if (username) {
		yield put(action.user.login({ username }));
	}
}

export { setUsernameToLocalStorage, checkUserBeLogged };
