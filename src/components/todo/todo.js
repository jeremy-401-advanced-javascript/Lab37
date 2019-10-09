import React, { useState, useEffect } from "react";

import Form from './form.js';
import TodoList from './list';

import "./newTodo.scss";

function Todos(props) {
  return (
    <>
      <Form />
      <TodoList/>
    </>
  );
}

export default Todos;
