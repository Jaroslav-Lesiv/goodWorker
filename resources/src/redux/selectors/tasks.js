export default {
	activeTask: state => state.task.activeTask,
	selectedTask: state => state.task.selectedTask,
	activeList: state => state.task.activeList,
	avaibleList: state => state.task.avaibleList,
	doneList: state => state.task.doneList
};