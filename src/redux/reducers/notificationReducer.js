import types from '../../constants/actionTypes'
const initState = {
   notificationList: [],
   seenNotifications: false,
}

function notificationReducer(state = initState, action) {
   const { payload } = action

   switch (action.type) {
      case types.GET_NOTIFICATIONS:
         return { ...state, notificationList: payload }

      case types.SEEN_NOTIFICATIONS:
         return { ...state, seenNotifications: action.value }

      case types.REMOVE_NOTIFY:
         return {
            ...state,
            notificationList: state.notificationList.filter(n => n._id !== action.notifyId),
         }

      default:
         return state
   }
}

export default notificationReducer
