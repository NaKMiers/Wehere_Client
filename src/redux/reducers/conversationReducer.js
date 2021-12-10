import Cookies from 'js-cookie'
import types from '../../constants/actionTypes'

const initState = {
   conversationList: [],
   curConversation: {},
}

function conversationReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_CONVERSATIONS:
         return { ...state, conversationList: payload }

      case types.SET_CUR_CONVERSATION:
         Cookies.set('curCvs', JSON.stringify(payload))
         return { ...state, curConversation: payload }

      default:
         return state
   }
}

export default conversationReducer
