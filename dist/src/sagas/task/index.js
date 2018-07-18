import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest,
    select
} from 'redux-saga/effects';
import { cmd } from '../../helper'
import * as action from '../../redux/actions';

function* updateActiveTask({payload}) {
    console.log('update active')
    const { task } = yield select()
    console.log('update active task', task, payload)

    const taskIdx = task.list.findIndex( task => task.id === payload.id )
    console.log('update active task idx', taskIdx)

    let newList = [...task.list]

    newList[taskIdx].spend_time = payload.spend_time
    newList[taskIdx].plain_time = payload.plain_time

    yield put(action.task.taskListSet(newList))
}

export {
    updateActiveTask
}
