import types from '../../constants/actionTypes'
const initState = {
   images: [],
}

function imageReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_IMAGES:
         return { ...state, images: payload }

      default:
         return state
   }
}

export default imageReducer
