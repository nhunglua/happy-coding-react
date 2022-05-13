import * as loadingType from "../constants/loadingType";

const initialState = {
  showLoading: false,
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case loadingType.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      };
    case loadingType.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default loadingReducer;
