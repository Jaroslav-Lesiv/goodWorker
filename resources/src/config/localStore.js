// import Store from 'electron-store';

// const localStore = new Store({ encryptionKey: 'test' });
import { avaibleList, doneList } from './mockData';

const mockStore = class {
	init() {
		this.set('avaibleList', avaibleList);
		this.set('doneList', doneList);
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
