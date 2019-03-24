import React from "react";
import withStyles from "react-jss";

import useInputState from "../../hooks/useInputState";
import styles from "./styles";

function TodoForm({ addTodo, classes }) {
  const [todoName, handleTodoNameChange, resetTodoName] = useInputState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (todoName === "") return;

    addTodo(todoName);
    resetTodoName();
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        className={classes.textInput}
        value={todoName}
        onChange={handleTodoNameChange}
      />
      <button className={classes.submitButton} type="submit">
        Add
      </button>
    </form>
  );
}

export default withStyles(styles)(TodoForm);
