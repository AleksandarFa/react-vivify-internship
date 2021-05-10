import { all } from "redux-saga/effects";

import watchGetUsersSaga from "./watchers/fetchUserSaga";

export default function* rootSaga() {
  yield all([watchGetUsersSaga()]);
}
