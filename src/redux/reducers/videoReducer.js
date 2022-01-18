import types from '../../constants/actionTypes'
const initState = {
   videos: [],
}

function videoReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_VIDEOS:
         return { ...state, videos: payload }

      default:
         return state
   }
}

export default videoReducer
