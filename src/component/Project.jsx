import "./Project.css";
import TodoList from "./todo/TodoList";
import Navbar from "./Navbar";

const Project = () => {
  return (
    <div className="rootContainer">
      <Navbar />
      <div className="rootWrapper">
        <h3>Project details</h3>
        {/* <Todo /> */}
      </div>
    </div>
  );
};

export default Project;
