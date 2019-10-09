import {createStore, combineReducers} from 'redux';

import todoReducer from './todos.store.js';
import settingsReducer from './settings.store.js';

let reducers = combineReducers({
  todos: todoReducer,
  settings: settingsReducer,
});

export default () => createStore(reducers);
