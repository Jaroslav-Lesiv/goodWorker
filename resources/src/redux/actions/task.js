import { createActions } from 'redux-actions';

export const { task } = createActions({
	TASK: {
		TASK_LIST: {
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
		START: payload => payload,
		DONE: payload => payload
	}
});
