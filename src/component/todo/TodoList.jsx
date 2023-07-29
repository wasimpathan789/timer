import React from "react";

const TodoList = ({ listData, removeActivity }) => {
  return (
    <>
      {listData.map((item, i) => (
        <div key={i} className="todoListContainer">
          <div className="todoListContainerLeft">
            <h3>{item} </h3>
          </div>
          <div className="todoListContainerRight">
            <div className="todoListTime">00"30:00 hrs</div>
            <div className="todoListDelete" onClick={() => removeActivity(i)}>
              <i className="fa-solid fa-trash-can"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
