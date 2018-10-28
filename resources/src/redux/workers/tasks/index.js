// import monitor from '../../../service/monitor';
import { TASK } from '../../../constants';

export default {
	// getMonitorSnapshot: async () => await monitor.getActiveWindow() ,
	updateTask: async ({ task, period }) => {
		console.log(task.total, TASK.PERIOD[period]);
		task.total += TASK.PERIOD[period] / 1000;
		return task;
	}
};