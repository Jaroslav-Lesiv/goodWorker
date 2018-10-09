import { handleActions } from 'redux-actions';
import { user } from '../actions';
import initialState from '../store/initialState';

export default handleActions(
	{
		[user.login]: (store, { payload }) => ({
			...store,
			isLogin: true,
			username: payload.username
		})
	},
	initialState.user
);
