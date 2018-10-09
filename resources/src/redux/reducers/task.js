import { handleActions } from 'redux-actions';
import { task } from '../actions';
import initialState from '../store/initialState';

export default handleActions(
	{
		[task.taskList.request.success]: (store, { payload }) => ({
			...store,
			task_list: payload
		}),

		[task.doneList.request.success]: (store, { payload }) => ({
			...store,
			done_list: payload
		})
	},
	initialState.task
);
