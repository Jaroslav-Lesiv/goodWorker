import { createActions } from 'redux-actions';

export const { app } = createActions({
	APP: {
		TOGGLE_APP: payload => payload,
		INIT: payload => payload
	}
});
