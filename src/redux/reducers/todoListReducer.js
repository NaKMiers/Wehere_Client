import types from '../../constants/actionTypes'
const initState = []

// const findIndex = (todoList, taskId) => {
//    let index = -1
//    todoList.forEach((task, i) => {
//       if (taskId === task._id) {
//          index = i
//       }
//    })

//    return index
// }

function todoListReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.GET_ALL_TASK:
         return payload
      case types.DELETE_TASK:
         const newTodoList = state.filter(task => task._id !== action.taskId)
         return newTodoList

      // case types.EDIT_TASK:
      //    console.log('payload', payload)
      //    payload.forEach(task => {
      //       let index = findIndex(state, task._id)
      //       console.log(index)
      //       if (index !== -1) {
      //          state[findIndex(state, task._id)] = task
      //       }
      //    })
      //    return [...state]

      default:
         return state
   }
}

export default todoListReducer
