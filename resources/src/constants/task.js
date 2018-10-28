import { color } from './';
export const TASK = {
	status: { 0: color.normal, 1: color.danger, 2: color.success },
	PRIORITY: { 1: null, 2: null, 3: null, 4: null, 5: null },
	TASK_TYPE: ['avaibleList', 'doneList'],
	PERIOD: {
		0: 0,
		// 10 sec
		1: 10000,
		// 30 sec
		2: 30000,
		// 1 min
		3: 60000,
		// 5 min
		4: 300000,
		// 10min
		5: 600000
	}
};
