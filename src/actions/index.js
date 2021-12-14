import types from '../constants/actionTypes'

class Actions {
   checkUser = payload => ({ type: types.CHECK_USER, payload })
   createNewUser = payload => ({ type: types.CREATE_NEW_USER, payload })

   loginRequest = payload => ({ type: types.LOGIN_REQUEST, payload })
   login = payload => ({ type: types.LOGIN, payload })

   logOut = () => ({ type: types.LOG_OUT })

   getUserRequest = userId => ({ type: types.GET_USER_REQUEST, userId })
   getUser = payload => ({ type: types.GET_USER, payload })

   changeThemeRequest = payload => ({ type: types.CHANGE_THEME_REQUEST, payload })
   changeTheme = theme => ({ type: types.CHANGE_THEME, theme })
   setTheme = theme => ({ type: types.SET_THEME, theme })

   getAllTaskRequest = () => ({ type: types.GET_ALL_TASK_REQUEST })
   getAllTask = payload => ({ type: types.GET_ALL_TASK, payload })
   addNewTaskRequest = payload => ({
      type: types.ADD_NEW_TASK_REQUEST,
      payload,
   })
   addNewTask = payload => ({ type: types.ADD_NEW_TASK, payload })
   deleteTaskRequest = taskId => ({ type: types.DELETE_TASK_REQUEST, taskId })
   deleteTask = taskId => ({ type: types.DELETE_TASK, taskId })
   editTaskRequest = payload => ({ type: types.EDIT_TASK_REQUEST, payload })
   editTask = payload => ({ type: types.EDIT_TASK, payload })

   setConversations = payload => ({ type: types.SET_CONVERSATIONS, payload })
   setCurConversation = payload => ({ type: types.SET_CUR_CONVERSATION, payload })

   getNotifications = payload => ({ type: types.GET_NOTIFICATIONS, payload })
   seenNotifications = value => ({ type: types.SEEN_NOTIFICATIONS, value })
   removeNotify = notifyId => ({ type: types.REMOVE_NOTIFY, notifyId })

   getDiaries = payload => ({ type: types.GET_DIARIES, payload })
   addDiary = payload => ({ type: types.ADD_DIARY, payload })
   editDiary = payload => ({ type: types.EDIT_DIARY, payload })
   deleteDiary = diaryId => ({ type: types.DELETE_DIARY, diaryId })

   setFriends = payload => ({ type: types.SET_FRIENDS, payload })
   unFriend = friendId => ({ type: types.UN_FRIEND, friendId })

   showBackdrop = () => ({ type: types.SHOW_BACKDROP })
   hideBackdrop = () => ({ type: types.HIDE_BACKDROP })
}

export default new Actions()
