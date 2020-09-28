import React from "react";
import { hot } from "react-hot-loader";

import "./App.css";
import TodoList from "./todos/TodoList";

const App = () => {
  return (
    <div className="App">
      <h1>Todo App with React Redux Thunk</h1>
      <TodoList />
    </div>
  );
};

export default hot(module)(App);
