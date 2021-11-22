import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'

const reducers = combineReducers({ user, showBackdrop })

export default reducers
