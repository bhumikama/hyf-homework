"use client";
import { createContext, useState } from "react";

export const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {
  //created a global state variable "activeIndex" so that all the components of the tree are aware of the activePanel  
  const [activeIndex, setActiveIndex] = useState(0);
  //function to change active index when the button is clicked
  const onOpen = (index) => {
    setActiveIndex(index);
  };
  return (
    <AccordionContext.Provider value={{ activeIndex, onOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};
