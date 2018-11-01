// import monitor from '../../../service/monitor';
import { TASK } from '../../../constants';
export default {
	// getMonitorSnapshot: async () => await monitor.getActiveWindow() ,
	updateTask: async ({ task, period }) => {
		task.total += TASK.PERIOD[period] / 1000;
		return task;
	},
	generateLog: async ({ task, snapshot }) => {
		return {
			task_id: task.id,
			created_at: +new Date(),
			app: snapshot.app,
			title: snapshot.title
		};
	}
};
