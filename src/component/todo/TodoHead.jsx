import React, { useEffect, useState } from "react";
import "./Todo.css";

const TodoHead = ({ todoAddHandler, setActivity, activity }) => {
  const [play, setPlay] = useState(false);
  const [time, setTime] = useState(0);
  const playHandler = () => {
    setPlay(!play);
  };

  // useEffect(() => {
  //   const myInterval = setInterval((time) => time + 10, 1000);
  // }, []);
  return (
    <div className="todoHeadCotainer">
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        placeholder="Type here..."
      />
      <div className="todoStopwatch">
        {/* <span>00:00:00</span> */}
        {/* <span className="digits">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="digits">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
        </span>
        <span className="digits mili-sec">
          {("0" + ((time / 10) % 100)).slice(-2)}
        </span> */}
        <div onClick={playHandler}>
          {/* { play? " <i class="fa-solid fa-pause"></i>" : "<i className="fa-solid fa-play"></i>"} */}
          {play ? (
            <i class="fa-solid fa-pause"></i>
          ) : (
            <i className="fa-solid fa-play"></i>
          )}
        </div>
      </div>
      <div className="todobtn" onClick={todoAddHandler}>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  );
};

export default TodoHead;
