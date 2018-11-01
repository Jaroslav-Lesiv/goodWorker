const activeTask = {
	id: 2
};
const logs = [];
const availableList = [
	{
		id: 1,
		label: 'Statistic page',
		priority: 5,
		status: 2,
		created_at: null,
		checkpoint: null,
		total: 1000,
		description: 'Create statistic page, analiz all done task'
	},
	{
		id: 2,
		label: 'Not found and  Error handler',
		priority: 5,
		status: 2,
		created_at: null,
		checkpoint: null,
		total: 3601,
		description: 'Create not found and error ui handler for task'
	},
	{
		id: 3,
		label: 'Create subtask view',
		priority: 5,
		status: 2,
		created_at: null,
		checkpoint: null,
		total: 4350,
		description: 'Create view for subtask, on one task page'
	},

	{
		id: 4,
		label: 'Loader',
		priority: 5,
		status: 2,
		description: 'Show loader if content is not loaded'
	},
	{
		id: 5,
		label: 'Active task',

		priority: 5,
		status: 2,
		description: 'If task is active, timer must be green (success color)'
	},
	{
		id: 6,
		label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
		priority: 2,
		status: 0,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
	}
];
const doneList = [
	{
		id: 9,
		label: 'Done list jdcnskjn',
		priority: 1,
		status: 2,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
	},

	{
		id: 10,
		label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
		priority: 3,
		status: 1,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
	},
	{
		id: 11,
		label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
		priority: 4,
		status: 0,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
	},
	{
		id: 12,
		label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
		priority: 2,
		status: 0,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
	}
];
export { availableList, doneList, activeTask, logs };
