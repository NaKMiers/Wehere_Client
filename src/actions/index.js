import types from '../constants/actionTypes'

class Actions {
   checkUser = payload => ({ type: types.CHECK_USER, payload })
   createNewUser = payload => ({ type: types.CREATE_NEW_USER, payload })

   loginRequest = payload => ({ type: types.LOGIN_REQUEST, payload })
   login = payload => ({ type: types.LOGIN, payload })

   changeThemeRequest = payload => ({ type: types.CHANGE_THEME_REQUEST, payload })
   changeTheme = payload => ({ type: types.CHANGE_THEME, payload })

   getAllTaskRequest = payload => ({ type: types.GET_ALL_TASK_REQUEST, payload })
   getAllTask = payload => ({ type: types.GET_ALL_TASK, payload })
   addNewTaskRequest = (curUserId, payload) => ({
      type: types.ADD_NEW_TASK_REQUEST,
      curUserId,
      payload,
   })
   updateTodoList = payload => ({ type: types.UPDATE_TODOLIST, payload })
   deleteTaskRequest = taskId => ({ type: types.DELETE_TASK_REQUEST, taskId })
   deleteTask = taskId => ({ type: types.DELETE_TASK, taskId })
   editTaskRequest = payload => ({ type: types.EDIT_TASK_REQUEST, payload })
   editTask = payload => ({ type: types.EDIT_TASK, payload })

   showBackdrop = () => ({ type: types.SHOW_BACKDROP })
   hideBackdrop = () => ({ type: types.HIDE_BACKDROP })
}

export default new Actions()
