import types from '../../constants/actionTypes'
const initState = false

function backdropReducer(state = initState, action) {
   switch (action.type) {
      case types.SHOW_BACKDROP:
         return true
      case types.HIDE_BACKDROP:
         return false
      default:
         return state
   }
}

export default backdropReducer
