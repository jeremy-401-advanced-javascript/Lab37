import React from "react";

import { Provider } from "react-redux";

import SettingsContext from './context/settings.js';

import Todos from "./components/todo/todo.js";

import createStore from "./state/store/index.js";

const store = createStore();

function App() {
  return (
    <SettingsContext>
      <Provider store={store}>
        <Todos />
      </Provider>
    </SettingsContext>
  );
}

export default App;
