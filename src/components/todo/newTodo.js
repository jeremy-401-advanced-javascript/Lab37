import React, { useState, useEffect } from "react";

import uuid from "uuid/v4";
import { connect } from "react-redux";
import Form from 'react-jsonschema-form';

// import { When } from "../if/index.js";

import * as actions from "../../state/store/todos.store.js";
import "./newTodo.scss";

const schemaURL = "https://api-js401.herokuapp.com/api/v1/todo/schema";

const uiSchema = {
  _id: { 'ui:widget': 'hidden'},
  __v: { 'ui:widget': 'hidden'},
}

console.log("THIS IS THE SCHEMA ", schemaURL);


function Todos(props) {
  // console.log(props);
  const [schema, setSchema] = useState({});
  // const [formData, setFormData] = useState({});

  // const handleChange = e => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const addTodo = form => {


    // e.preventDefault();
    // e.target.reset();
    // props.addTodo(formData);
    // console.log(formData);
    form.formData._id = uuid();
    // formData.complete = false;
    props.addTodo(form.formData);
  };

  const deleteTodo = id => {
    props.deleteTodo(id);
  };

  const toggleComplete = id => {
    console.log("This is toggleComplete: ", id);
    props.toggleComplete(id);
    // let element = document.getElementById(`${id}`);
    // element.classList.add('toggle');
  };

  useEffect(() => {
    fetch(schemaURL)
      .then(results => results.json())
      .then(schemaObject => setSchema(schemaObject));
  }, []);

  console.log(schema);

  return (

    <Form schema={schema} uiSchema={uiSchema} onSubmit={addTodo} />
    // <>
    //   <h3>Add Item</h3>
    //   <form onSubmit={addTodo}>
    //     <label>
    //       <span>To Do Item</span>
    //       <input
    //         name="text"
    //         placeholder="Add To Do List Item"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       <span>Difficulty Rating</span>
    //       <input
    //         type="range"
    //         min="1"
    //         max="5"
    //         name="difficulty"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       <span>Assigned To</span>
    //       <input
    //         type="text"
    //         name="assignee"
    //         placeholder="Assigned To"
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       <span>Due</span>
    //       <input type="date" name="due" onChange={handleChange} />
    //     </label>
    //     <button>Add Item</button>
    //   </form>
    //   <hr />

    //   <ul>
    //     {props.todoList.map(todo => (
    //       <li
    //         onClick={() => toggleComplete(todo._id)}
    //         id={todo._id}
    //         key={todo._id}
    //         className={`complete-${todo.complete.toString()}`}
    //       >
    //         {todo.text} / {todo.difficulty} / {todo.assignee} / {todo.due}/{" "}
    //         {todo.complete.toString()}
    //         <button onClick={() => deleteTodo(todo._id)}>DELETE</button>
    //       </li>
    //     ))}
    //   </ul>
    // </>
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
