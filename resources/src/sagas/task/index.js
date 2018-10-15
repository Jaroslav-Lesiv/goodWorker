import { put, select } from 'redux-saga/effects';
import store from '../../config/localStore';
import * as action from '../../redux/actions';

function* moveTaskToDone({ payload }) {
	const { task } = yield select();
	yield put(
		action.task.avaibleList.request.success(
			task.avaibleList.filter(task => task.id !== payload)
		)
	);

}

function* moveTaskToAvaible({ payload }) {
	const { task } = yield select();
	const newList = task.doneList.filter(task => task.id !== payload);
	yield put(action.task.avaibleList.request.success(newList));

}

function* getAvaibleList() {
	const avaibleList = store.get('avaibleList');
	yield put(action.task.avaibleList.request.success(avaibleList));
}
function* getDoneList() {
	const doneList = store.get('doneList');
	yield put(action.task.doneList.request.success(doneList));
}

export { moveTaskToDone, getAvaibleList, getDoneList, moveTaskToAvaible };
