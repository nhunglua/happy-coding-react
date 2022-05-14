import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();

const configureAppStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureAppStore;
