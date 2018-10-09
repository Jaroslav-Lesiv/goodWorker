import { createActions } from 'redux-actions';

export const { user } = createActions({
	USER: {
		LOGIN: payload => payload
	}
});
