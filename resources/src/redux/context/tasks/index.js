import storage from '../../../config/localStore';

const getAvailableList = async () => storage.get('availableList');

const setAvailableList = async list => storage.set('availableList', list);

const getDoneList = async () => storage.get('doneList');

const getAvailableTask = async id => {
	const list = await getAvailableList();
	const task = list.find(task => task.id === id);
	if (task) {
		return task;
	} else {
		throw 'Available task not found';
	}
};

const setActive = async id => storage.set('activeTask', id);

const updateAvailableTask = async ({task}) => {
	let list =  await getAvailableList();
	const idx = list.findIndex( _task => _task.id === task.id );

	if (~idx) {
		list[idx] = task;
		await setAvailableList(list);
		return true;
	} else {
		throw `Can't update task ${task.id}`;
	}
};

const activateTask = async id => {
	const availableList = await getAvailableList();
	const exist = availableList.some(task => task.id === id);
	if (exist) {
		setActive(id);
	} else {
		throw `Can't activate task ${id}`;
	}
};

const stopTask = async () => {
	setActive(null);
};

const getActiveTask = async () => {
	const activeTask = storage.get('activeTask');
	if (activateTask) {
		return activeTask;
	} else {
		throw 'Active task not found';
	}
};

export default {
	getAvailableList,
	getDoneList,
	activateTask,
	getAvailableTask,
	getActiveTask,
	updateAvailableTask,
	stopTask
};
