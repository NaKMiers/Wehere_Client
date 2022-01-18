import types from '../../constants/actionTypes'
const initState = {
   shorts: [],
}

function shortReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_SHORTS:
         return { ...state, shorts: payload }

      default:
         return state
   }
}

export default shortReducer
