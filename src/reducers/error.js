import * as errorTypes from "../constants/errorType";

const initialState = {
  show: false,
  errorText: "",
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case errorTypes.SHOW_ERROR:
      return {
        ...state,
        show: true,
        errorText: action.payload.errorText,
        // [action.payload.apiName]: action.payload.errorText,
      };
    case errorTypes.HIDE_ERROR:
      return {
        ...state,
        show: false,
        errorText: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default errorReducer;
