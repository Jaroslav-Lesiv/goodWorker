import storage from '../../../config/localStore';

const getAvaibleList = async () => storage.get('avaibleList');

const setAvaibleList = async list => storage.set('avaibleList', list);

const getDoneList = async () => storage.get('doneList');

const getAvaibleTask = async id => {
	const list = await getAvaibleList();
	const task = list.find(task => task.id === id);
	if (task) {
		return task;
	} else {
		throw 'Avaible task not found';
	}
};

const setActive = async id => storage.set('activeTask', id);

const updateAvaibleTask = async ({task}) => {
	let list =  await getAvaibleList();
	const idx = list.findIndex( _task => _task.id === task.id );

	if (~idx) {
		list[idx] = task;
		await setAvaibleList(list);
		return true;
	} else {
		throw `Can't update task ${task.id}`;
	}
};

const activateTask = async id => {
	const avaibleList = await getAvaibleList();
	const exist = avaibleList.some(task => task.id === id);
	if (exist) {
		setActive(id);
	} else {
		throw `Can't activate task ${id}`;
	}
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
	getAvaibleList,
	getDoneList,
	activateTask,
	getAvaibleTask,
	getActiveTask,
	updateAvaibleTask
};
