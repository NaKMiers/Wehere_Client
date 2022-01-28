import types from '../../constants/actionTypes'
const initState = {
   images: [],
}

function imageReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_IMAGES:
         return { ...state, images: payload }

      case types.ADD_IMAGE:
         return { ...state, images: [payload, ...state.images] }

      case types.DELETE_IMAGE:
         return { ...state, images: state.images.filter(img => img.image._id !== action.imageId) }

      default:
         return state
   }
}

export default imageReducer
