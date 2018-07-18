const Time = class {
    constructor({
        onTimeEnd
    }) {
        this.plain_time = 0
        this.spend_time = 0
        this.onTimeEnd = onTimeEnd
        this.timer = null
        this.taskId = null
    }

    async activate(_id) {
        if (this.timer) clearInterval(this.timer)
        const task_list = await storage.get('task_list', [])
        const task = task_list.find(task => task.id == _id)
        this.taskId = _id
        this.plain_time = task.plain_time
        this.spend_time = task.spend_time
        this.startTimer()
    }

    stopTimer() {
        if (this.timer) clearInterval(this.timer)
    }

    startTimer() {
        this.timer = setTimeout(() => this.tick(), 1000)
    }

    tick() {
        if (this.spend_time === this.plain_time) {
            this.onTimeEnd()
        }
        ++this.spend_time
        this.timer = setTimeout(() => this.tick(), 1000)
        this.updateActiveTask()
    }

    updateActiveTask() {
        const data = {
            data: {
                plain_time: this.plain_time,
                spend_time: this.spend_time,
                id: this.taskId
            },
            cmd: 'update_active_task'
        }

        chrome.tabs.query({ active: true }, tabs => {
            const tab = tabs[0]
            const id = tab ? tab.id : null
            if (id) {
                chrome.tabs.sendMessage(id, data);
            }

        });
    }
}