import { createActions } from 'redux-actions';

export const { task } = createActions({
	TASK: {
		AVAIBLE_LIST: {
			REQUEST: {
				PENDING: payload => payload,
				SUCCESS: payload => payload,
				FAILED: payload => payload
			}
		},
		DONE_LIST: {
			REQUEST: {
				PENDING: payload => payload,
				SUCCESS: payload => payload,
				FAILED: payload => payload
			}
		},
		SELECT_CURRENT_LIST: payload => payload,
		START: payload => payload,
		DONE_TASK: payload => payload,
		BACK_TASK: payload => payload,
		SELECT_TASK: payload => payload
	}
});
