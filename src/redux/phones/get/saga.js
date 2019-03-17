import { takeLatest } from 'redux-saga/effects';
import { GET_PHONES_SUCCESS } from "./actions";

export function* getPhonesSuccessSaga(actions) {
  yield
}

export default function* getPhonesSaga() {
  yield takeLatest(GET_PHONES_SUCCESS, getPhonesSuccessSaga);
}
