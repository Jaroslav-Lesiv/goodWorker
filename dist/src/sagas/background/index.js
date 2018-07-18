import { delay } from 'redux-saga';
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';
import { cmd } from '../../helper'
import * as action from '../../redux/actions';

function* activateTask({payload}) {
    console.log('payload', payload)
    yield cmd.doSet({ cmd: `activete_task`, data: payload })
}

function* disableTask({payload}) {
    yield cmd.doSet({ cmd: `disable_task`, data: payload })
}

function* setTaskList({payload}) {
    yield cmd.doSet({ cmd: `set_task_list`, data: payload })
}

function* doneTask({payload}) {
    yield cmd.doSet({ cmd: `done_task`, data: payload })
}

function* addTask({payload}) {
    yield cmd.doSet({ cmd: `add_task`, data: payload })
}

function* deleteTask({payload}) {
    yield cmd.doSet({ cmd: `delete_task`, data: payload })
}

function* updateTask({payload}) {
    yield cmd.doSet({ cmd: `update_task`, data: payload })
}

export {
    activateTask,
    disableTask,

    setTaskList,
    doneTask,
    addTask,
    deleteTask,
    updateTask
}
