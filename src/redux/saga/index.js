import { takeLatest, call, put } from 'redux-saga/effects'
import types from '../../constants/actionTypes'
import apis from '../../apis'
import actions from '../../actions'

function* rootSaga() {
   yield takeLatest(types.CHECK_USER, checkUser)
}

function* checkUser({ payload }) {
   const res = yield call(apis.checkUser, payload.username, payload.email)
   if (res.status === 200) {
      yield put(actions.showValidateRegister(res.data))
   }
}

export default rootSaga
