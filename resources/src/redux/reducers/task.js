import { handleActions } from 'redux-actions';
import { task } from '../actions';
import initialState from '../store/initialState';

export default handleActions(
	{
		[task.avaibleList.request.success]: (store, { payload }) => ({
			...store,
			avaibleList: payload
		}),

		[task.doneList.request.success]: (store, { payload }) => ({
			...store,
			doneList: payload
		}),

		[task.selectCurrentList]: (store, { payload }) => ({
			...store,
			activeList: payload
		}),
		[task.selectTask]: (store, { payload }) => ({
			...store, selectedTask: payload
		})
	},
	initialState.task
);
