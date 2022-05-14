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

export const addTodo = (newItem) => ({
  type: todoConstants.ADD_TODO,
  payload: {
    newItem,
  },
});

export const addTodoSuccess = (data) => ({
  type: todoConstants.ADD_TODO_SUCCESS,
  payload: {
    data,
  },
});

export const addTodoFailed = (error) => ({
  type: todoConstants.ADD_TODO_FAILED,
  payload: {
    error,
  },
});

export const deleteTodo = (id) => ({
  type: todoConstants.DELETE_TODO,
  payload: {
    id,
  },
});

export const deleteTodoSuccess = (id) => ({
  type: todoConstants.DELETE_TODO_SUCCESS,
  payload: {
    id,
  },
});

export const deleteTodoFailed = (error) => ({
  type: todoConstants.DELETE_TODO_FAILED,
  payload: {
    error,
  },
});
