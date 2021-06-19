import { all } from 'redux-saga/effects';
import {fetchSubscriptionPlans} from "./getSubscriptionPlansWatcherSaga";
import {sendUserDataSaga} from "./sendUserDataWatcherSaga";

export default function* rootSaga() {
  yield all([
    fetchSubscriptionPlans(),
    sendUserDataSaga(),
  ]);
}
