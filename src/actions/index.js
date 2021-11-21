import types from '../constants/actionTypes'

class Actions {
   checkUser = payload => ({ type: types.CHECK_USER, payload })
   createNewUser = payload => ({ type: types.CREATE_NEW_USER, payload })
   login = payload => ({ type: types.LOGIN, payload })
   loginRequest = payload => ({ type: types.LOGIN_REQUEST, payload })

   showBackdrop = () => ({ type: types.SHOW_BACKDROP })
   hideBackdrop = () => ({ type: types.HIDE_BACKDROP })
}

export default new Actions()
