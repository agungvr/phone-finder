import { fork } from 'redux-saga/effects';
import getPhonesSaga from './phones/get/saga'
import filterPhonesSaga from './phones/filter/saga'

export default function* rootSaga() {
  yield fork(getPhonesSaga);
  yield fork(filterPhonesSaga);
}
