import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'
import todoList from './todoListReducer'
import messenger from './messengerReducer'

const reducers = combineReducers({ user, showBackdrop, todoList, messenger })

export default reducers
