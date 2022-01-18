import types from '../../constants/actionTypes'
const initState = {
   blogs: [],
}

function blogReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_BLOGS:
         return { ...state, blogs: payload }

      default:
         return state
   }
}

export default blogReducer
