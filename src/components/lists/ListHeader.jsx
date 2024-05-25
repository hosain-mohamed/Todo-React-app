import React from "react";
import "./list.css";

const ListHeader = ({ completed = false, count = 0 }) => {
  return (
    <div>
      <div className="todo-list-header d-flex align-items-center mt-4">
        <p className="title ms-1 opacity-75 mb-0">
          {!completed ? "Todo" : "Completed"}
        </p>
        <p className="count ms-3 opacity-50 mb-0">{count} Items</p>
      </div>
      <hr className="hr-class mt-2" />
    </div>
  );
};

export default ListHeader;
