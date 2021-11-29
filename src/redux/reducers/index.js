import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'
import todoList from './todoListReducer'
import messenger from './messengerReducer'
import notification from './notificationReducer'

const reducers = combineReducers({ user, showBackdrop, todoList, messenger, notification })

export default reducers
