import { takeLatest, call, put, delay } from 'redux-saga/effects'
import types from '../../constants/actionTypes'
import apis from '../../apis'
import actions from '../../actions'

function* createUserAndLogin({ payload }) {
   const res = yield call(apis.createUser, payload)
   yield put(actions.showBackdrop())
   yield delay(350)
   if (res.status === 200) {
      yield put(actions.login(res.data))
   }
   yield put(actions.hideBackdrop())
}

function* login({ payload }) {
   yield put(actions.showBackdrop())
   yield delay(350)
   yield put(actions.login(payload))
   yield put(actions.hideBackdrop())
}

function* getUser({ userId }) {
   const res = yield call(apis.getUser, userId)
   if (res.status === 200) {
      yield put(actions.getUser(res.data))
   }
}

function* changeTheme({ payload }) {
   yield put(actions.showBackdrop())
   yield delay(350)
   const res = yield call(apis.changeTheme, payload.userId, payload.themeIndex)
   if (res.status === 200) {
      yield put(actions.changeTheme(res.data.setting.theme))
   }
   yield put(actions.hideBackdrop())
}

function* getAllTaskRequest({ payload }) {
   const taskList = yield call(apis.getAllTaskRequest, payload)
   yield put(actions.showBackdrop())
   yield delay(350)
   if (taskList.status === 200) {
      yield put(actions.getAllTask(taskList.data))
   }
   yield put(actions.hideBackdrop())
}

function* addTaskAndUpdateTodoList({ curUserId, payload }) {
   const newTaskRes = yield call(apis.addNewTask, payload)
   if (newTaskRes.status === 200) {
      const userUpdatedRes = yield call(apis.updateTodoList, curUserId, newTaskRes.data._id)
      if (userUpdatedRes.status === 200) {
         yield put(actions.updateTodoList(userUpdatedRes.data))
      }
   }
}

function* deleteTask({ taskId }) {
   const taskDeleted = yield call(apis.deleteTask, taskId)
   if (taskDeleted.status === 200) {
      yield put(actions.deleteTask(taskDeleted.data._id))
   }
}

function* editTask({ payload }) {
   const res = yield call(apis.editTask, payload)
   if (res.status === 200) {
      if (res.data.length === 1) {
         yield put(actions.editTask(res.data[0]))
      }
   }
}

function* rootSaga() {
   yield takeLatest(types.CREATE_NEW_USER, createUserAndLogin)
   yield takeLatest(types.LOGIN_REQUEST, login)
   yield takeLatest(types.GET_USER_REQUEST, getUser)
   yield takeLatest(types.CHANGE_THEME_REQUEST, changeTheme)
   yield takeLatest(types.GET_ALL_TASK_REQUEST, getAllTaskRequest)
   yield takeLatest(types.ADD_NEW_TASK_REQUEST, addTaskAndUpdateTodoList)
   yield takeLatest(types.DELETE_TASK_REQUEST, deleteTask)
   yield takeLatest(types.EDIT_TASK_REQUEST, editTask)
}

export default rootSaga
