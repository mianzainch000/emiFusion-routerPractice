import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { login, logout } from "../Redux/Slice/authSlice";
import { useDispatch } from "react-redux";
const NavBar = () => {
  const dispatch = useDispatch();
  // let login = localStorage.getItem("login");

  const islogout = () => {
    dispatch(logout(""));
    // alert("Hello");
    // localStorage.removeItem("login");
  };
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("Login", login);
    if (!login) {
      // console.log(".....");
      navigate("/login");
    }
  }, [login]);

  return (
    <div>
      <ul className="navBar">
        <li>
          <NavLink className="nav-bar-link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-bar-link" to="/filter">
            Filter
          </NavLink>
        </li>
        {/* <li>
          <NavLink className="nav-bar-link" to="/login">
            Login
          </NavLink>
        </li> */}
        <li>
          <NavLink className="nav-bar-link" to="/logout" onClick={islogout}>
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
