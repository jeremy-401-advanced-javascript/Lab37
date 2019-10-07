import React from "react";

import { Provider } from "react-redux";

import Todos from "./components/todo/newTodo.js";

import createStore from "./state/store/index.js";

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
