import * as actionType from "../constants/todo";

const initialState = {
  listItem: [],
  error: "",
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_TODO:
      return {
        ...state,
        loading: true,
        listItem: [],
      };

    case actionType.FETCH_TODO_SUCCESS:
      return {
        ...state,
        listItem: action.payload.data,
      };

    case actionType.FETCH_TODO_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default todoReducer;
