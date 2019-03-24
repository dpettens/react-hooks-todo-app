import React from "react";
import withStyles from "react-jss";

import TodoItem from "../TodoItem";
import { visibilityFilters } from "../../hooks/useVisibilityFilter";
import styles from "./styles";

function getVisibleTodos(todos, visibilityFilter) {
  switch (visibilityFilter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case visibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      throw new Error("Unknown filter: " + visibilityFilter);
  }
}

function TodoList({
  classes,
  completeTodo,
  deleteTodo,
  visibilityFilter,
  todos
}) {
  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  return (
    <ul className={classes.list}>
      {visibleTodos.map(todo => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default withStyles(styles)(TodoList);
