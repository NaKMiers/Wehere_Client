import types from '../../constants/actionTypes'
const initState = []

const findIndex = (todoList, taskId) => {
   let index = -1
   todoList.forEach((task, i) => {
      if (taskId === task._id) {
         index = i
      }
   })

   return index
}

function todoListReducer(state = initState, action) {
   const { payload } = action
   let index = -1

   switch (action.type) {
      case types.SET_TODOLIST:
         return [...payload]

      case types.ADD_NEW_TASK:
         return [...state, payload]

      case types.SET_READY_TASK:
         return [...payload]

      case types.SET_COMPLETED_TASK:
         return [...payload]

      case types.EDIT_TASK:
         index = findIndex(state, payload._id)
         if (index !== -1) {
            state[index] = payload
         }
         return [...state]

      case types.DELETE_TASK:
         return state.filter(task => task._id !== action.taskId)

      default:
         return state
   }
}

export default todoListReducer
