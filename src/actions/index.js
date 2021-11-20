import types from '../constants/actionTypes'

class Actions {
   checkUser = payload => ({ type: types.CHECK_USER, payload })
   showValidateRegister = payload => ({ type: types.SHOW_VALIDATE_REGISTER, payload })
}

export default new Actions()
