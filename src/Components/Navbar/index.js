import { FaDashboard } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import "./index.css";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="nav1">
          <h1 style={{ color: "white" }}>
            <RxDashboard size={20} /> indigo learn
          </h1>
        </div>
        <div className="nav2">
          <p>
            BUY COURSES <IoMdArrowDropdown />{" "}
          </p>
          <p>
            BUY COURSES <IoMdArrowDropdown />{" "}
          </p>
          <p>FREE RESOURCES</p>
        </div>
        <div className="login">
          <CgProfile color="black" />
          <p>Login/signup</p>
        </div>
      </div>
    </>
  );
};
export default Navbar;
