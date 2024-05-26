import React from "react";
import ListHeader from "./ListHeader";
import GroupList from "./GroupList";
import { useSelector } from "react-redux";

const CompleteList = () => {
  const allItems = useSelector((state) => state.allItems);
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
