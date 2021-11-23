import types from '../../constants/actionTypes'
const initState = {
   curUser: {},
}

function useReducer(state = initState, action) {
   const { payload } = action
   switch (action.type) {
      case types.LOGIN:
         return { ...state, curUser: payload }
      case types.CHANGE_THEME:
         return { ...state, curUser: payload }
      case types.UPDATE_TODOLIST:
         return { ...state, curUser: payload }
      default:
         return state
   }
}

export default useReducer
