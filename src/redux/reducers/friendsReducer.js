import types from '../../constants/actionTypes'
const initState = {
   friends: [],
}

function friendsReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.SET_FRIENDS:
         return { ...state, friends: payload }

      case types.UN_FRIEND:
         return { ...state, friends: state.friends.filter(f => f._id !== action.friendId) }

      default:
         return state
   }
}

export default friendsReducer
