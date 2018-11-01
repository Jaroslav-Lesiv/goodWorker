export default {
	activeTask: state => state.task.activeTask,
	selectedTask: state => state.task.selectedTask,
	activeList: state => state.task.activeList,
	availableList: state => state.task.availableList,
	doneList: state => state.task.doneList,
	filter: state => state.task.filter,
	filterKeyword: state => state.task.filter.keyword
};
