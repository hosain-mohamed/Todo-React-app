import React from "react";
import "./list.css";
import TodoItem from "./TodoItem";
const GroupList = ({ items = [] }) => {
  return (
    <div className="todo-list-items">
      <div>
        {items.length ? (
          items.map((item, index) => <TodoItem key={index} item={item} />)
        ) : (
          <p className="opacity-50">No items</p>
        )}
      </div>
    </div>
  );
};

export default GroupList;
