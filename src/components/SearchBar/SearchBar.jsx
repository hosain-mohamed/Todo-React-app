import React, { useContext } from "react";
import "./searchBar.css";
import { TodoListContext } from "../../context/TodoListContext";
const SearchBar = () => {
  const { allItems, dispatch } = useContext(TodoListContext);

  const addItem = (e) => {
    // check if input is not empty

    if (e.key === "Enter") {
      if (e.target.value.trim() === "") {
        e.target.setCustomValidity("Please add a Todo");
        return;
      }
      e.preventDefault();
      const id = allItems.length + 1;
      dispatch({
        type: "ADD",
        item: {
          id: id,
          value: e.target.value,
          compeleted: false,
        },
      });
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
