import * as todoConstants from "../constants/todo";

export const fetchTodo = () => ({
  type: todoConstants.FETCH_TODO,
});

export const fetchTodoSuccess = (data) => ({
  type: todoConstants.FETCH_TODO_SUCCESS,
  payload: {
    data,
  },
});

export const fetchTodoFailed = (error) => ({
  type: todoConstants.FETCH_TODO_FAILED,
  payload: {
    error,
  },
});
