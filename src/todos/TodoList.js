import React from "react";
import { connect } from "react-redux";

import { removeTodo, completeTodo } from "../redux/actions";
import { displayAlert } from "../redux/thunks";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

export const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletePressed,
  onDisplayAlertClicked,
}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletePressed={onCompletePressed}
          onDisplayAlertClicked={onDisplayAlertClicked}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletePressed: (text) => dispatch(completeTodo(text)),
  onDisplayAlertClicked: (text) => dispatch(displayAlert(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
