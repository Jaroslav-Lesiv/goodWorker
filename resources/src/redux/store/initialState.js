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
	currentTask: {
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
	task: {
		activeList: 'avaibleList',
		avaibleList: [
			{
				id: 2345234,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},
			{
				id: 234523445,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},
			{
				id: 2345234765,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},

			{
				id: 2345234456,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},
			{
				id: 2345234721,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},
			{
				id: 234523487123,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			}
		],
		doneList: [
			{
				id: 23452334564,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},

			{
				id: 23452343456,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},
			{
				id: 23452334564,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			},
			{
				id: 234523476567,
				label: 'do somthin for many babosiki. Dcfrbv es EFSVDV',
				description:
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis quod odio consectetur voluptatem ratione!'
			}
		]
	}
};
