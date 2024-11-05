"use client";
import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Counter = () => {
  //fetching the context variable  
  const { state, dispatch } = useContext(CounterContext);
  const { count } = state;
  console.log("Current count:", count);
  return (
    <div className="flex justify-center items-center gap-3 p-4">
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
      <p>Count : {count}</p>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
    </div>
  );
};

export default Counter;
