import types from '../../constants/actionTypes'
import Cookies from 'js-cookie'
const initState = {
   userProfile: null,
   curUser: null,
}

function userReducer(state = initState, action) {
   const { payload } = action
   switch (action.type) {
      case types.LOGIN:
         Cookies.set('theme', JSON.stringify(payload.setting.theme))
         return { ...state, curUser: payload }

      case types.GET_USER:
         return { ...state, userProfile: payload }

      case types.CHANGE_THEME:
         Cookies.set('theme', JSON.stringify(action.theme))
         return {
            ...state,
            curUser: {
               ...state.curUser,
               setting: { ...state.curUser.setting, theme: action.theme },
            },
         }

      case types.CHANGE_AVATAR:
         return { ...state, curUser: { ...state.curUser, avatar: payload } }

      case types.CHANGE_BACKGROUND:
         return { ...state, curUser: { ...state.curUser, background: payload } }

      case types.UPDATE_TODOLIST:
         return { ...state, curUser: payload }

      case types.LOG_OUT:
         Cookies.remove('theme')
         localStorage.removeItem('user')
         return { ...state, userProfile: null, curUser: null }

      default:
         return state
   }
}

export default userReducer
