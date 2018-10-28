const activeWin = require('active-win');
// var screenshot = require('electron-screenshot')

const Monitor = class {
	constructor() {
		this.app = 'goodWorker';
		this.title = 'goodWorker desktop app';
	}

	async getSnapshot() {
		return await activeWin();
	}
	
};

const windowMonitor = new Monitor();

export default windowMonitor;
