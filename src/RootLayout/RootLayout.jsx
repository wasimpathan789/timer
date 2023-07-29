import React from "react";
import Navbar from "../component/Navbar";
import "./RootLayout.css";
import Todo from "../component/todo/Todo";

const RootLayout = () => {
  return (
    <div className="rootContainer">
      <Navbar />
      <div className="rootWrapper">
        <Todo />
      </div>
    </div>
  );
};

export default RootLayout;
