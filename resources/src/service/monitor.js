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
    
	// async getScreensoot() {
	// 	screenshot({ filename: +new Date() }, (a,b,c) => {
	// 		console.log(a,b,c);
	// 	});
	// }
};

const windowMonitor = new Monitor();

export default windowMonitor;
