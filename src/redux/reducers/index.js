import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'
import todoList from './todoListReducer'
import notification from './notificationReducer'
import conversation from './conversationReducer'

const reducers = combineReducers({
   user,
   showBackdrop,
   todoList,
   notification,
   conversation,
})

export default reducers
