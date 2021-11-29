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
         Cookies.set('userId', JSON.stringify(payload._id))
         Cookies.set('theme', JSON.stringify(payload.setting.theme))
         return { ...state, curUser: payload }

      case types.GET_USER:
         return { ...state, userProfile: payload }

      case types.CHANGE_THEME:
         console.log('CHANGE_THEME: ', action.theme)
         Cookies.set('theme', JSON.stringify(action.theme))
         return {
            ...state,
            curUser: {
               ...state.curUser,
               setting: { ...state.curUser.setting, theme: action.theme },
            },
         }

      case types.UPDATE_TODOLIST:
         return { ...state, curUser: payload }

      case types.LOG_OUT:
         Cookies.remove('userId')
         Cookies.remove('theme')
         return { ...state, userProfile: null, curUser: null }

      default:
         return state
   }
}

export default useReducer
