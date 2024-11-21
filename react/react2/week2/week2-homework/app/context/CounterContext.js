"use client";
import { createContext, useReducer } from "react";
//creating a CounterContext to maintain a global state for count variable
export const CounterContext = createContext();

const initialState = { count: 0 };
//defining the reducer function in context to be able to modify the counter based on the actions not just at the component level
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
