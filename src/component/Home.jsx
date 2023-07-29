import { useState } from "react";
import "./Home.css";
import { BsFillPlayFill } from "react-icons/bs";

const Home = () => {
  const [button, setButton] = useState(false);
  const recordhandler = () => {
    setButton(!button);
  };
  return (
    <div>
      <div className="Hometop">
        <input type="text" placeholder="Add your Task " />
        <div className="homeTimer">
          <div onClick={recordhandler}>
            {button ? "<BsFillPlayFill />" : "<BsFillPlayFi />"}
          </div>
        </div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Home;
