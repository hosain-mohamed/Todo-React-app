import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "./list.css";
import { TodoListContext } from "../../context/TodoListContext";

const TodoItem = ({ item }) => {
  const { dispatch } = useContext(TodoListContext);
  function removeItem(item) {
    dispatch({ type: "REMOVE", id: item.id });
  }

  function toggleItem(item) {
    dispatch({ type: "TOGGLE", id: item.id });
  }

  return (
    <div className="list-item d-flex mb-3 justify-content-between align-items-center">
      <div className="d-flex ">
        <div onClick={() => toggleItem(item)}>
          {item.compeleted ? (
            <i className="fa-regular fa-circle-check fs-5"></i>
          ) : (
            <i className="fa-regular fa-circle fs-5"></i>
          )}
        </div>

        <h6
          className="ms-3 text-start mb-0 mt-0"
          style={{
            textDecoration: item.compeleted ? "line-through" : "none",
          }}
          onClick={() => toggleItem(item)}
        >
          {item.value}
        </h6>
      </div>

      <Button
        className="bg-transparent border-0"
        onClick={() => removeItem(item)}
      >
        <i className="fa-solid fa-trash"></i>
      </Button>
    </div>
  );
};

export default TodoItem;
