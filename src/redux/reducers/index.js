import { combineReducers } from 'redux'
import user from './userReducer'
import showBackdrop from './showBackdrop'
import todoList from './todoListReducer'
import notification from './notificationReducer'
import conversation from './conversationReducer'
import diary from './diaryReducer'
import friend from './friendsReducer'
import account from './accountReducer'
import blog from './blogReducer'
import image from './imageReducer'
import video from './videoReducer'
import short from './shortReducer'

const reducers = combineReducers({
   user,
   friend,
   showBackdrop,
   todoList,
   notification,
   conversation,
   diary,
   account,
   blog,
   image,
   video,
   short,
})

export default reducers
