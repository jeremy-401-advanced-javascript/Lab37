import React, { useState } from "react";

import uuid from "uuid/v4";
import { connect } from "react-redux";

import * as actions from "../../state/store/todos.store.js";

function Todos(props) {
  console.log(props);
  const [formData, setFormData] = useState({});

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addTodo = e => {
    e.preventDefault();
    e.target.reset();
    // props.addTodo(formData);
    console.log(formData);
    formData._id = uuid();
    props.addTodo(formData);
  };

  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={addTodo}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Due</span>
          <input type="date" name="due" onChange={handleChange} />
        </label>
        <button>Add Item</button>
      </form>
      <hr />
      <ul>
        {props.todoList.map(todo => (
          <li key={todo._id}>
            {todo.text} / {todo.difficulty} / {todo.assignee} / {todo.due}
            <button >
              Delete
            </button>
          </li>
          
        ))}
      </ul>
    </>
  );
}

const mapStateToProps = state => ({
  todoList: state.todos
});

const mapDispatchToProps = (dispatch, getState) => ({
  addTodo: todoObject => dispatch(actions.add(todoObject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
