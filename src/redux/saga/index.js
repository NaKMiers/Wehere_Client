import { takeLatest, call, put, delay } from 'redux-saga/effects'
import types from '../../constants/actionTypes'
import apis from '../../apis'
import actions from '../../actions'

function* createUserAndLogin({ payload }) {
   const res = yield call(apis.createUser, payload)
   yield put(actions.showBackdrop())
   yield delay(350)
   yield put(actions.hideBackdrop())
   if (res.status === 200) {
      yield put(actions.login(res.data))
   }
}

function* login({ payload }) {
   yield put(actions.showBackdrop())
   yield delay(350)
   yield put(actions.hideBackdrop())
   yield put(actions.login(payload))
}

function* rootSaga() {
   yield takeLatest(types.CREATE_NEW_USER, createUserAndLogin)
   yield takeLatest(types.LOGIN_REQUEST, login)
}

export default rootSaga
