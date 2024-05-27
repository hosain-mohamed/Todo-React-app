import React from "react";
import ListHeader from "./ListHeader";
import GroupList from "./GroupList";
import { useSelector } from "react-redux";
import { selectAllTodos } from "../../features/todoSlicer";

const TodoList = () => {
  const allItems = useSelector(selectAllTodos);
  const todoItems = allItems.filter((item) => !item.compeleted);

  return (
    <div>
      <ListHeader completed={false} count={todoItems.length} />
      <GroupList items={todoItems} />
    </div>
  );
};

export default TodoList;
