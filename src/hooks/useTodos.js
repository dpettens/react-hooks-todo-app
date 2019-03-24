import { useEffect, useReducer } from "react";
import uuid from "uuid";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";

function todosReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload)
          return { ...todo, completed: !todo.completed };

        return todo;
      });
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      throw new Error("No action type specified in todosReducer");
  }
}

const initialTodos = JSON.parse(window.localStorage.getItem("todos")) || [];

export default function useTodos() {
  const [state, dispatch] = useReducer(todosReducer, initialTodos);

  useEffect(() => window.localStorage.setItem("todos", JSON.stringify(state)));

  function addTodo(todoName) {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: uuid(),
        text: todoName
      }
    });
  }

  function completeTodo(todoId) {
    dispatch({ type: TOGGLE_TODO, payload: todoId });
  }

  function deleteTodo(todoId) {
    dispatch({ type: DELETE_TODO, payload: todoId });
  }

  return [state, addTodo, completeTodo, deleteTodo];
}
