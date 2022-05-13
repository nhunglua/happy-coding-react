import { call, take, fork, put, delay } from "redux-saga/effects";
import * as todoTypes from "../constants/todo";

import todoApi from "../api/todo";

import { showLoading, hideLoading } from "../actions/loading";
import { showError, hideError } from "../actions/error";
import { fetchTodoFailed, fetchTodoSuccess } from "../actions/todo";

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export function* watchFetchTodoAction(action) {
  console.log("watchFetchTodoAction");

  //take is blocking
  yield take(todoTypes.FETCH_TODO);

  yield put(showLoading());

  // call is blocking
  const todos = yield call(todoApi.getAll);
  console.log({ todos });

  const { status, statusText, data } = todos;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchTodoSuccess(data));
  } else {
    yield put(fetchTodoFailed(data));
  }

  yield delay(500);
  yield put(hideLoading());
}

export default function* rootSaga() {
  yield fork(watchFetchTodoAction);
}
