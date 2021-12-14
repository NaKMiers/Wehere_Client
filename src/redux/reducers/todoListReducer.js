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
      case types.GET_ALL_TASK:
         return [...payload]

      case types.ADD_NEW_TASK:
         return [...state, payload]

      case types.DELETE_TASK:
         const newTodoList = state.filter(task => task._id !== action.taskId)
         return newTodoList

      case types.EDIT_TASK:
         index = findIndex(state, payload._id)
         if (index !== -1) {
            state[index] = payload
         }
         return [...state]

      default:
         return state
   }
}

export default todoListReducer
