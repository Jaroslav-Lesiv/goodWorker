import { createActions } from 'redux-actions';
// import { REQUEST } from './constants.js'

export const { task } = createActions({
  TASK: {
      TASK_LIST_SET: payload => payload,
      TASK_LIST_UPDATE: payload => payload,

      TASK_SET_ONE: payload => payload,
      TASK_SELECT: payload => payload,

      DELETE_TASK: payload => payload,
      DELETE_ONE_TASK: payload => payload,

      COPY_TASK: payload => payload,
      COPY_ONE_TASK: payload => payload,

      SELECT_ALL: payload => payload,
      UNSELECT_ALL: payload => payload,

      DONE_TASK: payload => payload,

      ACTIVATE_TASK: payload => payload,
      DISABLE_TASK: payload => payload,

      UPDATE_ACTIVE_TASK: payload => payload,

      ADD_TASK: payload => payload,
      DELETE_TASK: payload => payload,
      UPDATE_TASK: payload => payload,
      DONE_TASK: payload => payload,
  }
})
