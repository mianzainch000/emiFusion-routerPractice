import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../Redux/Slice/authSlice";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlerEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlerPassword = (event) => {
    setPassword(event.target.value);
  };
  const dispatch = useDispatch();
  const obj = {
    email,
    password,
  };
  // let login = localStorage.getItem("login");
  const islogin = () => {
    dispatch(login(obj));

    localStorage.setItem("login", true);
    navigate("/home");
  };
  const navigate = useNavigate();
  // useEffect(() => {
  // if (login) {
  // navigate("/home");
  // }
  // });

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" onChange={handlerEmail} />
      <br />
      <input type="text" onChange={handlerPassword} />
      <br />
      <button type="submit" onClick={islogin}>
        Login
      </button>
    </div>
  );
};
