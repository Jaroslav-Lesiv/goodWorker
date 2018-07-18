import { handleActions } from "redux-actions";
import { task } from "../../actions";
import initialState from "../../store/initialState";

const selectTask = (_id, selected) =>
  selected.includes(_id) ? selected.filter(taskId => taskId !== _id) : [...selected, _id];


const deleteTask = (selected, list) => list.filter( task => !selected.includes(task.id) )

const deleteOneTask = (_id, list) => list.filter(task => task.id !== _id)

const copyTask = (list, selected) => [...list, ...selected.map( taskId => ({ ...list.find( task => task.id === taskId ), id: +new Date() + Math.random()  })  )]

const copyOneTask = (list, _id) => [...list, { ...list.find(task => task.id === _id), id:  +new Date() + Math.random()  }]


const selectAll = list => list.map( task => task.id )

const unselectAll = () => []


export default handleActions(
  {
    [task.taskListSet]: (store, { payload }) => ({
      ...store,
      list: payload
    }),
    [task.taskListUpdate]: (store, { payload }) => ({
      ...store,
      list: [...store, ...payload]
    }),
    [task.taskSetOne]: (store, { payload }) => ({
      ...store,
      list: [...store.list, payload]
    }),
    [task.taskSelect]: (store, { payload }) => ({
      ...store,
      selected: selectTask(payload, store.selected)
    }),
    [task.deleteTask]: (store, { payload }) => ({
      ...store,
      selected: [], list: deleteTask(store.selected, store.list)
    }),
    
    [task.deleteOneTask]: (store, { payload }) => ({
      ...store, list: deleteOneTask(payload, store.list)
    }),

    [task.copyTask]: (store, { payload }) => ({
      ...store, list: copyTask(store.list, store.selected)
    }),

    [task.selectAll]: (store, { payload }) => ({
      ...store, selected: selectAll(store.list)
    }),

    [task.unselectAll]: (store, { payload }) => ({
      ...store, selected: []
    }),
  
    [task.doneTask]: (store, { payload }) => ({
      ...store, selected: [], done: [...store.done, ...store.selected], list: deleteTask(store.selected, store.list)
    }),
    [task.doneOneTask]: (store, { payload }) => ({
      ...store, done: [...store.done, store.list.find(task => task.id === payload)], list: deleteOneTask(payload, store.list)
    }),

    [task.updateActiveTask]: (store, { payload }) => ({
      ...store, active: payload
    })    
  },
  initialState.task
);