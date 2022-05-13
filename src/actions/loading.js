import * as loadingType from "../constants/loadingType";

export const showLoading = () => ({
  type: loadingType.SHOW_LOADING,
});

export const hideLoading = () => ({
  type: loadingType.HIDE_LOADING,
});
