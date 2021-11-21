import { combineReducers } from 'redux'
import users from './userReducer'
import showBackdrop from './showBackdrop'

const reducers = combineReducers({ users, showBackdrop })

export default reducers
