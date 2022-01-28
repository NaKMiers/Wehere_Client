import types from '../../constants/actionTypes'
const initState = {
   videos: [],
}

function videoReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_VIDEOS:
         return { ...state, videos: payload }

      case types.ADD_VIDEO:
         return { ...state, videos: [payload, ...state.videos] }

      case types.DELETE_VIDEO:
         return { ...state, videos: state.videos.filter(v => v.video._id !== action.videoId) }

      default:
         return state
   }
}

export default videoReducer
