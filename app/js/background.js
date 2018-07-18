const { stringify, parse } = JSON;

const color = "#3a83ed";

const isContain = (path, find) => ~path.indexOf(find);

const isPDF = path => ~path.indexOf(".pdf");


const setBadgeText = text => {
  chrome.browserAction.setBadgeText({ text: text });
};

const openApp = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const data = { cmd: "toggleOpen", data: true };
    chrome.tabs.sendMessage(tabs[0].id, data, response => {
      console.log(response);
    });
  });
};
const openConvert = payload => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const data = { cmd: "openConvert", data: payload };
    chrome.tabs.sendMessage(tabs[0].id, data, response => {
      console.log(response);
    });
  });
};

const setIcon = icon => {
  chrome.browserAction.setIcon({ path: icon });
};
const setBadgeBackgroundColor = color => {
  chrome.browserAction.setBadgeBackgroundColor({ color: color });
};

document.addEventListener("DOMContentLoaded", function () {
  chrome.browserAction.onClicked.addListener(tab => {
    openApp();
  });
});

const setToken = (_token, sender) => {
  chrome.storage.sync.set({ _token }, () => {
    sender(true);
  });
};

const setStore = (data, sender) => {
  storage.set('store', data).then(bool => {
    sender(bool)
  })
};
const getStore = (sender) => {
  storage.get('store').then(store => {
    sender(store)
  })
};

const sendToken = sender => {
  chrome.storage.sync.get(["_token"], result => {
    sender(result._token || null);
  });
};

const Task = new class {
  constructor() {
    this.task_timer = new Time({ onTimeEnd: () => alert('timeEnd') })
  }

  async addTask(task) {
    const task_list = await storage.get('task_list', [])
    storage.set('task_list', [...task_list, { ...task, id: +new Date() }])
  }

  setTaskList(task_list) {
    storage.set('task_list', task_list)
  }

  async updateTask(_task) {
    const task_list = await storage.get('task_list', [])
    const taskIdx = task_list.findIndex(task => task.id == _task.id)
    if (~taskIdx) task_list[taskIdx] = _task
    storage.set('task_list', task_list)
  }

  async deleteTask(_id) {
    const task_list = await storage.get('task_list', [])
    storage.set('task_list', task_list.filter(task => task.id != _id))
  }

  async doneTask(_id) {
    const [task_list, done_list] = await Promise.all([storage.get(task_list, []), storage.get('done_list', [])])
    const task = task_list.find(task => task.id == _id)

    storage.set('task_list', task_list.filter(task => task.id != _id))
    storage.set('done_list', [...done_list, task])
  }

  async removeFromDoneTask(_id) {
    const [task_list, done_list] = await Promise.all([storage.get(task_list, []), storage.get('done_list', [])])
    const task = done_list.find(task => task.id == _id)

    storage.set('task_list', [...task_list, task])
    storage.set('done_list', done_list.filter(task => task.id != _id))
  }

  activate(_id) {
    console.log('ActionSwapVerticalCircle', _id)
    this.task_timer.activate(_id)
  }

  stopTimer() {
    this.task_timer.stopTimer()
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.cmd) {
    case "getToken":
      sendToken(sendResponse);
      break;

    case "setToken":
      setToken(request.data, sendResponse);
      break;
    case "openApp":
      openApp();
      break;
    case "openConvert":
      openConvert(request.data);
      break;
    case "set_store":
      setStore(request.data, sendResponse)
      break;
    case "get_store":
      getStore(sendResponse)
      break;
    case "set_active":
      getStore(sendResponse)
      break;

    case "set_task_list":
      Task.setTaskList(request.data)
      break;
    case "add_task":
      Task.addTask(request.data)
      break;
    case "delete_task":
      Task.deleteTask(request.data)
      break;
    case "update_task":
      Task.updateTask(request.data)
      break;
    case "done_task":
      Task.done(request.data)
      break;

    case 'activate_task':
      Task.activate(request.data)
      break
    case 'disable_task':
      Task.stopTimer()
      break

    default:
      break;
  }
  return true;
});

