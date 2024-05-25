import React, { createContext, useReducer } from "react";
import { todoReducer } from "../reducers/todoListReducer";

const TodoListContext = createContext();

const TodoListProvider = ({ children }) => {
  const localStorageItems = JSON.parse(localStorage.getItem("allItems"));

  const [allItems, dispatch] = useReducer(todoReducer, localStorageItems || []);
  return (
    <TodoListContext.Provider value={{ allItems, dispatch }}>
      {children}
    </TodoListContext.Provider>
  );
};

export { TodoListProvider, TodoListContext };
