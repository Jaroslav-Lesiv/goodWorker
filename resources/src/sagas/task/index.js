import { put, select } from 'redux-saga/effects';
import store from '../../config/localStore';
import * as action from '../../redux/actions';

function* moveTaskToDone({ payload }) {
	const { task } = yield select();
	const newList = task.avaibleList.filter(task => task.id !== payload);
	yield put(action.task.avaibleList.request.success(newList));

	console.log(1234, store.get('avaibleList'));
}

export { moveTaskToDone };
