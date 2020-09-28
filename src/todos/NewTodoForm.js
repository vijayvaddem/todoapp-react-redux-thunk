import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
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
      <button className="new-todo-button">Create</button>
    </div>
  );
};

export default NewTodoForm;
