import types from '../../constants/actionTypes'
const initState = {
   curUser: {},
}

function useReducer(state = initState, action) {
   switch (action.type) {
      case types.LOGIN:
         return { ...state, curUser: action.payload }
      default:
         return state
   }
}

export default useReducer
