import { handleActions } from 'redux-actions';
import { task } from '../actions';
import initialState from '../store/initialState';

export default handleActions(
	{
		[task.availableList.request.success]: (store, { payload }) => ({
			...store,
			availableList: payload
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
		}),
		[task.activeTask.request.success]: (store, { payload }) => ({
			...store, activeTask: payload
		}),
		[task.setFilterKeyword]: (store, { payload }) => ({
			...store, filter: { ...store.filter, keyword: payload  }
		})
	},
	initialState.task
);
