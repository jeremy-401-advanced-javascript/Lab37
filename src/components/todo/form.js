import React, { useState, useEffect } from "react";

import uuid from "uuid/v4";
import { connect } from "react-redux";
import Form from 'react-jsonschema-form';

import * as actions from "../../state/store/todos.store.js";
import "./newTodo.scss";

const schemaURL = "https://api-js401.herokuapp.com/api/v1/todo/schema";

const uiSchema = {
  _id: { 'ui:widget': 'hidden'},
  __v: { 'ui:widget': 'hidden'},
}

function Todos(props) {
  const [schema, setSchema] = useState({});

  const addTodo = form => {
    form.formData._id = uuid();
    props.addTodo(form.formData);
  };

  const deleteTodo = id => {
    props.deleteTodo(id);
  };

  const toggleComplete = id => {
    props.toggleComplete(id);
  };

  useEffect(() => {
    fetch(schemaURL)
    .then(results => results.json())
    .then(schemaObject => setSchema(schemaObject));
  }, []);

  return (
    <Form schema={schema} uiSchema={uiSchema} onSubmit={addTodo} />
  );
}

const mapStateToProps = state => ({
  todoList: state.todos
});

const mapDispatchToProps = (dispatch, getState) => ({
  addTodo: todoObject => dispatch(actions.add(todoObject)),
  deleteTodo: todoObject => dispatch(actions.destroy(todoObject)),
  toggleComplete: todoObject => dispatch(actions.complete(todoObject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
