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
		ACTIVE_TASK: {
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
		SELECT_TASK: payload => payload,
		CHECK_ACTIVE_TASK: payload => payload,
		ACTIVATE_TASK: payload => payload,
		STOP_TASK: payload => payload,
		SET_FILTER_KEYWORD: payload => payload
	}
});
