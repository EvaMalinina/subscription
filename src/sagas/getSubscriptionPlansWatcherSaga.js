import { all, call, put, takeLatest } from 'redux-saga/effects';
import {getSubscriptionPlans, setSubscriptionPlans, setSubscriptionPlansError} from "../reducers/subscriptionPlans";

export function* fetchSubscriptionPlans() {
  try {
    const subscriptionPlansResponse = yield call(fetch, 'https://cloud-storage-prices-moberries.herokuapp.com/prices');
    const data = yield subscriptionPlansResponse.json();
    yield put(setSubscriptionPlans(data));
  } catch (error) {
    yield put(setSubscriptionPlansError(error));
  }
};

export function* actionWatcher() {
  yield all([yield takeLatest(getSubscriptionPlans.type, fetchSubscriptionPlans)]);
};
