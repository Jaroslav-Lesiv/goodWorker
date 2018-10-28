import { avaibleList, doneList, activeTask } from './mockData';

const mockStore = class {
	constructor() {
		this.init();
	}

	init() {
		this.set('avaibleList', avaibleList);
		this.set('doneList', doneList);
		this.set('activeTask', activeTask.id);
	}

	get(name) {
		const json = localStorage.getItem(name);
		return JSON.parse(json);
	}

	set(name, value) {
		const json = JSON.stringify(value);
		localStorage.setItem(name, json);
	}
};

const store = new mockStore();

export default store;
