import { call, put, takeLatest } from "redux-saga/effects";

import { FETCH_USERS, FETCH_USERS_REQUESTED } from "../../actions/constants";
import userApi from "../../api/apiUsers";

function* getUsers() {
  const users = yield call(userApi.getUsers);
  yield put({ type: FETCH_USERS, payload: users });
}

export default function* watchGetUsersSaga() {
  yield takeLatest(FETCH_USERS_REQUESTED, getUsers);
}
