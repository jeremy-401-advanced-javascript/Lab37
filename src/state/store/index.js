import {createStore, combineReducers} from 'redux';

 import todoReducer from './todos.store.js';

let reducers = combineReducers({
  todos: todoReducer
});

export default () => createStore(reducers);