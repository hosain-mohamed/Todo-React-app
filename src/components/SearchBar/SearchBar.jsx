import React from "react";
import "./searchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTodos, addTodo } from "../../features/todoSlicer";

const SearchBar = () => {
  const dispatch = useDispatch();
  const allItems = useSelector(selectAllTodos);

  const addItem = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        e.target.setCustomValidity("Please add a Todo");
        return;
      }
      e.preventDefault();
      const id = allItems.length + 1;
      console.log(e.target.value);
      dispatch(addTodo({ id, value: e.target.value, compeleted: false }));
      e.target.value = "";
    }
  };
  return (
    <div className="input-container position-relative w-100 ">
      <form onKeyDown={(e) => addItem(e)}>
        <input
          type="text"
          className="todo-input w-100 position-relative"
          placeholder="Add Todo"
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
