export default {
	app: {
		isOpenApp: true
	},
	messages: {
		show: false,
		messages: ''
	},
	user: {
		isLogin: false,
		username: ''
	},
	task: {
		activeList: 'avaibleList',
		filter: {
			keyword: ''
		},
		selectedTask: {
			id: null,
			description: '',
			label: '',
			status: 0,
			priority: null
		},
		activeTask: {
			// bu task id, id = timestamp start date
			id: 234567890,
			name: 'Not long task name',
			descripton:
				'task description lorem10 sdfnljfvnlasnfvl nldfvl jmj;doifvoln ; ;oijdz;ndckjdn ljnzdflknl nldfnli',
			// owners - owners user id
			owners: [3, 4],
			created_by: 1,
			// 1 - backlog, 2 - in progress , 3 - QA, 4 - done
			status: 1,
			history: [
				{
					// start & end - timestamp
					start: 1876543,
					end: 9876543,
					// worker_on description what i doing
					worked_on: '',
					track: [
						// spend-time in seconds
						{ app_name: 34567 }
					]
				}
			]
		},
		avaibleList: [],
		doneList: []
	}
};
