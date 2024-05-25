import React, { useContext } from "react";
import ListHeader from "./ListHeader";
import GroupList from "./GroupList";
import { TodoListContext } from "../../context/TodoListContext";

const CompleteList = () => {
  const { allItems } = useContext(TodoListContext);
  const completedItems = allItems.filter((item) => item.compeleted);
  if (completedItems.length === 0) {
    return <div></div>;
  }
  return (
    <div>
      <ListHeader completed={true} count={completedItems.length} />
      <GroupList completed={true} items={completedItems} />
    </div>
  );
};

export default CompleteList;
