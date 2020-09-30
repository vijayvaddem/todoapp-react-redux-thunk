import React, { useState } from "react";
import { connect } from "react-redux";

import { createTodo } from "../redux/actions";
import "./NewTodoForm.css";

const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        value={inputValue}
        placeholder="Add some text"
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          } else {
            console.log("duplicate! do nothing");
          }
        }}
        className="new-todo-button"
      >
        Create
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
