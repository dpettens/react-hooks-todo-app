import React from "react";
import withStyles from "react-jss";

import styles from "./styles";

function TodoItem({ classes, completed, completeTodo, deleteTodo, id, text }) {
  return (
    <li className={classes.item}>
      <span className={classes.text}>{text}</span>
      <button className={classes.toogle} onClick={() => completeTodo(id)}>
        {completed ? "Todo" : "Done"}
      </button>
      <button className={classes.delete} onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}

export default withStyles(styles)(TodoItem);
