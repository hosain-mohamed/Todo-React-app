import { createSlice } from "@reduxjs/toolkit";

const todoSlicer = createSlice({
  name: "todo",
  initialState: {
    allItems: JSON.parse(localStorage.getItem("allItems")) || [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.allItems.push(action.payload);
      localStorage.setItem("allItems", JSON.stringify([...state.allItems]));
    },
    removeTodo: (state, action) => {
      console.log(action.payload);
      state.allItems = state.allItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("allItems", JSON.stringify([...state.allItems]));
    },
    toggleTodo: (state, action) => {
      const item = state.allItems.find((item) => item.id === action.payload);
      item.compeleted = !item.compeleted;
      localStorage.setItem("allItems", JSON.stringify([...state.allItems]));
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlicer.actions;
export const selectAllTodos = (state) => state.todo.allItems;
export default todoSlicer.reducer;
