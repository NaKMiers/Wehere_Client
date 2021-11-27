import types from '../../constants/actionTypes'
import Cookies from 'js-cookie'

const initState = {
   curConversation: null,
}

function messengerReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_CUR_CONVERSATION:
         Cookies.set('curCvs', JSON.stringify(payload))
         return { ...state, curConversation: payload }
      default:
         return state
   }
}

export default messengerReducer
