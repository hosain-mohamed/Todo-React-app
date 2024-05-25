import React, { useContext } from "react";
import ListHeader from "./ListHeader";
import GroupList from "./GroupList";
import { TodoListContext } from "../../context/TodoListContext";

const TodoList = () => {
  const { allItems } = useContext(TodoListContext);
  const todoItems = allItems.filter((item) => !item.compeleted);
  return (
    <div>
      <ListHeader completed={false} count={todoItems.length} />
      <GroupList items={todoItems} />
    </div>
  );
};

export default TodoList;
