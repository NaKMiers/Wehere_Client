import types from '../../constants/actionTypes'
import Cookies from 'js-cookie'
const initState = {
   userProfile: null,
   curUser: null,
}

function useReducer(state = initState, action) {
   const { payload } = action
   switch (action.type) {
      case types.LOGIN:
         Cookies.set('user', JSON.stringify(payload)) // payload from server || from cookies(client)
         return { ...state, curUser: JSON.parse(Cookies.get('user')) }

      case types.GET_USER:
         return { ...state, userProfile: payload }

      case types.CHANGE_THEME:
         Cookies.set('user', JSON.stringify(payload)) // payload from servser
         return { ...state, curUser: JSON.parse(Cookies.get('user')) }

      case types.UPDATE_TODOLIST:
         return { ...state, curUser: payload }

      case types.LOG_OUT:
         Cookies.remove('user')
         return { ...state, userProfile: null, curUser: null }

      default:
         return state
   }
}

export default useReducer
