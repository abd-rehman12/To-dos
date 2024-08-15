import React, { createContext, useContext, useState } from "react";

export const contextTodo = createContext();

export function Home({ children }) {
  const [allTodo, setAllTodo] = useState(()=>{
    const savedTodos=localStorage.getItem("todos");
     if(savedTodos) 
        return JSON.parse(savedTodos) 
        else 
        return [];
  });
  return (
    <div>
      <contextTodo.Provider value={{ allTodo, setAllTodo }}>
        {children}
      </contextTodo.Provider>
    </div>
  );
}


