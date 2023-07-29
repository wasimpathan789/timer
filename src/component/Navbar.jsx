import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="logo">
        <h1>Time Tracker</h1>
      </Link>
      <ul className="navLinks">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <Link to="/project">Projects</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
