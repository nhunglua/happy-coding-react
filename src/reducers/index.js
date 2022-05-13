import { combineReducers } from "redux";
import todoReducer from "./todo";
import loadingReducer from "./loading";
import errorReducer from "./error";

const rootReducer = combineReducers({
  todo: todoReducer,
  loading: loadingReducer,
  error: errorReducer,
});
export default rootReducer;
