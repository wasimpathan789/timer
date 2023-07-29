import React, { useEffect, useState } from "react";

const TodoStopwatch = () => {
  //   const [time, setTime] = useState({ s: 0, m: 0, h: 0 });

  let [second, minutes, hour] = [0, 0, 0];
let timer = null;
  const stopwatch = () => {
    second++;
    if (second == 60) {
      second = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hour++;
      }
    }
  };

  useEffect(() => {
    setInterval(stopwatch, 1000);
  }, []);
  return (
    <div>
      <span>{hour}</span> <span>{minutes}</span> <span>{second}</span>
    </div>
  );
};

export default TodoStopwatch;
