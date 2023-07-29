import { useEffect, useState } from "react";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoStopwatch from "./TodoStopwatch";

const Todo = () => {
  const getLocalStorege = () => {
    let listData = localStorage.getItem("listData");
    if (listData) {
      return (listData = JSON.parse(localStorage.getItem("listData")));
    } else {
      return [];
    }
  };
  const [listData, setListData] = useState(getLocalStorege());
  const [activity, setActivity] = useState();
  const [sec, setSec] = useState();
  const [min, setMin] = useState();
  const [hour, setHour] = useState();

  const todoAddHandler = (inputText) => {
    const updatedList = setListData([...listData, activity]);
    setActivity("");
    localStorage.setItem("listData", JSON.stringify(listData));
  };

  const removeActivity = (i) => {
    console.log("hi");
    const udpateListData = listData.filter((elem, id) => {
      return i != id;
    });
    setListData(udpateListData);
  };

  const timeHandler = () => {
    setInterval(() => sec + 1), 1000;
  };

  useEffect(() => {
    localStorage.setItem("listData", JSON.stringify(listData));
  }, []);

  return (
    <div className="todoContainer">
      <TodoHead
        todoAddHandler={todoAddHandler}
        activity={activity}
        setActivity={setActivity}
      />
      {listData ? (
        <h1 className="todoContainerHeadline">Projects Details </h1>
      ) : (
        ""
      )}

      <TodoList listData={listData} removeActivity={removeActivity} />

      <TodoStopwatch />
    </div>
  );
};

export default Todo;
