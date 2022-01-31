import { takeLatest, call, put, delay } from 'redux-saga/effects'
import types from '../../constants/actionTypes'
import apis from '../../apis'
import actions from '../../actions'

function* createUserAndLogin({ payload }) {
   const res = yield call(apis.createUser, payload)
   localStorage.setItem('user', res.data.token)
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
   const res = yield call(apis.changeTheme, payload.themeIndex)
   if (res.status === 200) {
      yield put(actions.changeTheme(res.data.setting.theme))
   }
   yield put(actions.hideBackdrop())
}

function* rootSaga() {
   yield takeLatest(types.CREATE_NEW_USER, createUserAndLogin)
   yield takeLatest(types.LOGIN_REQUEST, login)
   yield takeLatest(types.GET_USER_REQUEST, getUser)
   yield takeLatest(types.CHANGE_THEME_REQUEST, changeTheme)
}

export default rootSaga
