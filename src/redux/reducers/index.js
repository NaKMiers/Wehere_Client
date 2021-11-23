import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'
import todoList from './todoListReducer'

const reducers = combineReducers({ user, showBackdrop, todoList })

export default reducers
