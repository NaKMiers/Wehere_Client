import types from '../../constants/actionTypes'
const initState = {
   matchOtherUsernameRegistor: false,
   matchOtherEmailRegistor: false,
}

function validateReducer(state = initState, action) {
   const payload = action.payload

   switch (action.type) {
      case types.SHOW_VALIDATE_REGISTER:
         return {
            ...state,
            matchOtherUsernameRegistor: payload.matchOtherUsername,
            matchOtherEmailRegistor: payload.matchOtherEmail,
         }
      default:
         return { ...state }
   }
}

export default validateReducer
