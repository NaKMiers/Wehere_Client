import types from '../../constants/actionTypes'
const initState = {
   shorts: [],
}

function shortReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_SHORTS:
         return { ...state, shorts: payload }

      case types.ADD_SHORT:
         return { ...state, shorts: [payload, ...state.shorts] }

      case types.DELETE_SHORT:
         return { ...state, shorts: state.shorts.filter(s => s.short._id !== action.shortId) }

      default:
         return state
   }
}

export default shortReducer
