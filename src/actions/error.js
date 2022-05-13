import * as errorTypes from "../constants/errorType";

export const showError = (errorText) => ({
  type: errorTypes.SHOW_ERROR,
  payload: {
    errorText,
  },
});

export const hideError = () => ({
  type: errorTypes.HIDE_ERROR,
});
