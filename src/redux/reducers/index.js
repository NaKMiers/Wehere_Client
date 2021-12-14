import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'
import todoList from './todoListReducer'
import notification from './notificationReducer'
import conversation from './conversationReducer'
import diary from './diaryReducer'
import friend from './friendsReducer'
import account from './accountReducer'

const reducers = combineReducers({
   user,
   friend,
   showBackdrop,
   todoList,
   notification,
   conversation,
   diary,
   account,
})

export default reducers
