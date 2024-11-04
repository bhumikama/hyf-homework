"use client";

import clsx from "clsx";
import { useContext } from "react";
import { AccordionContext } from "../context/AccordionContext";

function Panel({ title, children, index }) {
  //using the global context variables and functions in the Child component to avoid prop drilling
  const { activeIndex, onOpen } = useContext(AccordionContext);
  const toggle = () => onOpen(index);
  //making use of the global context to variable to decide on displaying the content
  let isOpen = activeIndex === index;

  return (
    <div
      className={
        "p-2 border-t border-t-black flex flex-col justify-center items-center"
      }
    >
      <h2 className={"text-xl font-bold"}>{title}</h2>
      <div
        className={clsx({
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
      {!isOpen && (
        <button
          className={"border border-blue-500 rounded text-blue-500"}
          onClick={() => toggle()}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion() {
  // moved all the state variables from the parent to the Context to avoid prop drilling
  return (
    <div className={"flex flex-col border border-black rounded"}>
      <Panel title={"Section 1"} index={1}>
        Content 1
      </Panel>
      <Panel title={"Section 2"} index={2}>
        Content 2
      </Panel>
      <Panel title={"Section 3"} index={3}>
        Content 3
      </Panel>
    </div>
  );
}
