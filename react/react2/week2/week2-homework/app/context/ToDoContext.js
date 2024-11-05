"use client";
import { createContext, useReducer } from "react";

export const ToDoContext = createContext();

const initialToDo = [
  { id: 0, title: "Buy Groceries", completed: false },
  { id: 1, title: "Visit the dentist", completed: false },
  { id: 2, title: "Wash the Car", completed: false },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: action.id, title: action.text, completed: false },
      ]; // handles adding of new task to the list
    case "delete":
      return state.filter((task) => task.id !== action.id);
    case "toggle":
      return state.map((task) =>
        task.id === action.id ? { ...task, completed: !task.completed } : task
      ); // handle toggling of completed state
    default:
      return state; // Return the current state for unknown actions
  }
};

export const ToDoProvider = ({ children }) => {
  //initialize the state with initial to do list
  const [state, dispatch] = useReducer(reducer, initialToDo);
  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};
