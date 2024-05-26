import React from "react";
import ListHeader from "./ListHeader";
import GroupList from "./GroupList";
import { useSelector } from "react-redux";

const TodoList = () => {
  const allItems = useSelector((state) => state.allItems);
  const todoItems = allItems.filter((item) => !item.compeleted);

  return (
    <div>
      <ListHeader completed={false} count={todoItems.length} />
      <GroupList items={todoItems} />
    </div>
  );
};

export default TodoList;
