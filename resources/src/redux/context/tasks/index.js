import storage from '../../../service/storage';
import { buildError } from '../../../utils';

const getAvailableList = async () => storage.get('availableList');

const setAvailableList = async list => storage.set('availableList', list);

const getDoneList = async () => storage.get('doneList');

const getAvailableTask = async id => {
	const list = await getAvailableList();
	const task = list.find(task => task.id === id);
	if (task) {
		return task;
	} else {
		buildError('Available task not found');
	}
};

const setActive = async id => storage.set('activeTask', id);

const updateAvailableTask = async ({ task }) => {
	let list = await getAvailableList();
	const idx = list.findIndex(_task => _task.id === task.id);

	if (~idx) {
		list[idx] = task;
		await setAvailableList(list);
		return true;
	} else {
		buildError(`Can't update task ${task.id}`);
	}
};

const activateTask = async id => {
	const availableList = await getAvailableList();
	const exist = availableList.some(task => task.id === id);
	if (exist) {
		setActive(id);
	} else {
		buildError(`Can't activate task ${id}`);
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
		buildError('Active task not found');
	}
};

const getLastAvailableTask = async () => {
	const list = await getAvailableList();
	return list[list.length - 1] || {};
};

const putLog = async log => {
	let list = storage.get('logs');
	list.push(log);
	storage.set('logs', list);
	return true;
};

export default {
	getAvailableList,
	getDoneList,
	activateTask,
	getAvailableTask,
	getActiveTask,
	updateAvailableTask,
	stopTask,
	getLastAvailableTask,
	putLog
};
