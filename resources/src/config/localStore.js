// import Store from 'electron-store';

// const localStore = new Store({ encryptionKey: 'test' });

const mockStore = class {
	get(name) {
		return localStorage.getItem(name);
	}

	set(name, value) {
		localStorage.setItem(name, value);
	}
};

const store = new mockStore();
console.log(process.env);

export default store;
