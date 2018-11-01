let ipcRenderer = {
	on: TYPE => {
		console.log(`IPC: ${TYPE}`);
	},
	send: (TYPE, data) => {
		console.log(`IPC: ${TYPE}  ${JSON.stringify(data)}`);
	}
};
if (window.require) {
	ipcRenderer = window.require('electron').ipcRenderer;
}

const Monitor = class {
	constructor() {
		this.app = 'goodWorker';
		this.title = 'goodWorker desktop app';
		this.init();
	}

	init() {
		ipcRenderer.on('WRITE_APP_LOG', (event, { log }) => {
			console.log({ log });
		});
	}

	async getSnapshot({ task = {}, user = {} }) {
		ipcRenderer.send('LOGS', { cmd: 'GENERATE', data: { task, user } });
	}
};

const windowMonitor = new Monitor();

export default windowMonitor;
