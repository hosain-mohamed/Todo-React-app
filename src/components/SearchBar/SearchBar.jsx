import React, { useContext } from "react";
import "./searchBar.css";
import { TodoListContext } from "../../context/TodoListContext";
const SearchBar = () => {
  const { allItems, dispatch } = useContext(TodoListContext);

  const addItem = (e) => {
    if (e.key === "Enter") {
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
      <input
        className="todo-input w-100 position-relative"
        type="text"
        placeholder="Add Todo"
        onKeyDown={(e) => addItem(e)}
      ></input>
    </div>
  );
};

export default SearchBar;
