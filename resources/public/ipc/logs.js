const ipc = require('electron').ipcMain;
var monitor = require('active-win');

const send = (event, data) => {
	event.sender.send('WRITE_APP_LOG', data);
};

const generateAppLog = async ({ task = {}, user = {} }) => {
	const app = await monitor();
	const log = {
		task_id: task.id,
		created_at: +new Date().toISOString(),
		user_id: user.id,
		app_name: app.owner.name,
		id: app.id,
		title: app.title
	};
	return { log };
};

ipc.on('LOGS', async (event, { cmd, data }) => {
	switch (cmd) {
		case 'GENERATE':
			const response = await generateAppLog(data);
			send(event, response);
			break;

		default:
			break;
	}
});
