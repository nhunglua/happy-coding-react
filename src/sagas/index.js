import { call, take, fork, put, delay, takeEvery } from "redux-saga/effects";
import * as todoTypes from "../constants/todo";

import todoApi from "../api/todo";

import { showLoading, hideLoading } from "../actions/loading";
import { showError, hideError } from "../actions/error";
import {
  addTodoSuccess,
  addTodoFailed,
  fetchTodoFailed,
  fetchTodoSuccess,
  deleteTodoSuccess,
  deleteTodoFailed,
  updateTodoSuccess,
  updateTodoFailed,
} from "../actions/todo";

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export function* watchFetchTodoAction(action) {
  //take is blocking
  yield take(todoTypes.FETCH_TODO);
  yield put(showLoading());
  // call is blocking
  const todos = yield call(todoApi.getAll);

  //  yield put(hideError());
  //xử lý try/catch để k cần phải check statuscode
  const { status, statusText, data } = todos;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(fetchTodoSuccess(data));
  } else {
    yield put(showError(statusText));
  }
  yield delay(500);
  yield put(hideLoading());
}

export function* addTodoSaga({ payload }) {
  yield put(showLoading());
  const { newItem } = payload;
  const { title, isComplete } = newItem;

  const response = yield call(todoApi.add, { title, isComplete });

  const { data, status } = response;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTodoSuccess(data));
  } else {
    yield put(addTodoFailed(data));
  }
  yield delay(500);
  yield put(hideLoading());
}

export function* deleteTodoSaga({ payload }) {
  yield put(showLoading());

  const { id } = payload;
  const response = yield call(todoApi.remove, id);

  const { data, status } = response;

  console.log({ payload, data, status });

  if (status === STATUS_CODE.SUCCESS) {
    yield put(deleteTodoSuccess(id));
  } else {
    yield put(deleteTodoFailed(data));
  }

  yield delay(500);
  yield put(hideLoading());
}

export function* updateTodoSaga({ payload }) {
  yield put(showLoading());

  const { todo } = payload;
  const response = yield call(todoApi.update, todo);

  const { data, status } = response;

  if (status === STATUS_CODE.SUCCESS) {
    yield put(updateTodoSuccess(data));
  } else {
    yield put(deleteTodoFailed(data));
  }

  yield delay(500);
  yield put(hideLoading());
}

export default function* rootSaga() {
  yield fork(watchFetchTodoAction);
  yield takeEvery(todoTypes.ADD_TODO, addTodoSaga);
  yield takeEvery(todoTypes.DELETE_TODO, deleteTodoSaga);
  yield takeEvery(todoTypes.UPDATE_TODO, updateTodoSaga);
}
