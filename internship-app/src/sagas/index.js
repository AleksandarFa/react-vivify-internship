import { all, fork } from "redux-saga/effects";

import todoSaga from "./watchers/fetchUserSaga";

export default function* rootSaga() {
  yield all([todoSaga()]);
}
