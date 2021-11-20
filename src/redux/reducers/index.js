import { combineReducers } from 'redux'
import users from './userReducer'
import validate from './validateReducer'

const reducers = combineReducers({ users, validate })

export default reducers
