import React from "react";
import withStyles from "react-jss";

import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import VisibilityControls from "../VisibilityControls";
import useTodos from "../../hooks/useTodos";
import useVisibilityFilter from "../../hooks/useVisibilityFilter";
import styles from "./styles";

function App({ classes, switchTheme }) {
  const [todos, addTodo, completeTodo, deleteTodo] = useTodos();
  const [visibilityFilter, setVisibilityFilter] = useVisibilityFilter();

  return (
    <>
      <button className={classes.themeButton} onClick={switchTheme}>
        Switch Theme
      </button>
      <div className={classes.todosContainer}>
        <h1 className={classes.title}>Todo App with React Hooks</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          visibilityFilter={visibilityFilter}
          todos={todos}
        />
        <VisibilityControls setVisibilityFilter={setVisibilityFilter} />
      </div>
    </>
  );
}

export default withStyles(styles)(App);
