"use client";
import { createContext, useState } from "react";

export const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {
  //created a global state variable "activeIndex" so that all the components of the tree are aware of the activePanel
  const [activeIndex, setActiveIndex] = useState(0);
  //function to change active index when the button is clicked, if the button was already clicked then activeIndex is set to null to handle the toggling of displaying the content
  const onOpen = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <AccordionContext.Provider value={{ activeIndex, onOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};
