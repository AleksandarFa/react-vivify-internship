import { call, put, takeEvery } from "redux-saga/effects";

import {
  CREATE_COMMENT,
  CREATE_COMMENT_REQUESTED,
  FETCH_TODOS,
  FETCH_TODOS_REQUESTED,
  FETCH_USERS,
  FETCH_USERS_REQUESTED,
  POST_COMMENT,
  POST_COMMENT_REQUESTED,
} from "../../actions/constants";
import userApi from "../../api/apiUsers";

function* getUsers() {
  const users = yield call(userApi.getUsers);
  yield put({ type: FETCH_USERS, payload: users });
}

function* getTodos() {
  const todos = yield call(userApi.getTodos);
  yield put({ type: FETCH_TODOS, payload: todos });
}

function* createComment({ payload }) {
  console.log(payload);
  yield put({ type: CREATE_COMMENT, payload });
}

// function* Comment({ payload }) {
//   const newComment = yield call(userApi.postComment, payload);
//   yield put({ type: POST_COMMENT, payload: newComment });
// }

export default function* todoSaga() {
  yield takeEvery(FETCH_USERS_REQUESTED, getUsers);
  yield takeEvery(FETCH_TODOS_REQUESTED, getTodos);
  // yield takeEvery(POST_COMMENT_REQUESTED, Comment);
  yield takeEvery(CREATE_COMMENT_REQUESTED, createComment);
}
