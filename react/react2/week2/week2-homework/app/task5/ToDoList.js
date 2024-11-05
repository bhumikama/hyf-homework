"use client";
import React, { useContext, useState } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  //fetch the global state variable
  const { state, dispatch } = useContext(ToDoContext);
  console.log("State", state);
  const [inputValue, setInput] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "add",
      id: state.length + 1,
      text: inputValue,
    });
    setInput("");
  };

  const handleTaskDelete = (taskID) => {
    dispatch({ type: "delete", id: taskID });
  };
  const handleTaskToggle = (taskID) => {
    dispatch({ type: "toggle", id: taskID });
  };
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-grow p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></input>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add
          </button>
        </form>
      </div>

      <ul className="space-y-2">
        {state.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 bg-gray-100 rounded shadow"
          >
            <span className="text-gray-700">{task.title}</span>
            <div className="flex gap-2">
              <button
                className="hover:bg-blue-400 text-black font-bold text-md p-1 my-1 ml-1 border border-blue-300"
                onClick={() => handleTaskToggle(task.id)}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                className="hover:bg-blue-400 text-black font-bold text-md p-1 my-1 ml-1 border border-blue-300"
                onClick={() => handleTaskDelete(task.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
