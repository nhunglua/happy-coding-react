import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Error from "./components/Error";
import Loading from "./components/Loading";
import TodoList from "./components/TodoList";
import configureStore from "./redux/configuareStore";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <Loading />
        <Error />
      </div>
    </Provider>
  );
}

export default App;
