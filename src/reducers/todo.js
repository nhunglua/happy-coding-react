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

    case actionType.ADD_TODO:
      return {
        ...state,
      };
    case actionType.ADD_TODO_SUCCESS:
      return {
        ...state,
        listItem: [...state.listItem, ...[action.payload.data]],
      };
    case actionType.ADD_TODO_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };

    case actionType.DELETE_TODO:
      return {
        ...state,
      };
    case actionType.DELETE_TODO_SUCCESS:
      return {
        ...state,
        listItem: state.listItem.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case actionType.DELETE_TODO_FAILED:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default todoReducer;
