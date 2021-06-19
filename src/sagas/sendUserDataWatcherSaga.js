import { all, call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {sendUserData, sendUserDataError, sendUserDataSuccess} from "../reducers/userDataSlice";


export function* sendUserDataSaga(payload) {
  try {
    yield call(() => axios.post(`https://httpbin.org/post`, payload));
    yield put(sendUserDataSuccess());

  } catch (e) {
    yield put(sendUserDataError(e.response.data));
  }
};

export function* actionWatcher() {
  yield all([yield takeLatest(sendUserData.type, sendUserDataSaga)]);
};
