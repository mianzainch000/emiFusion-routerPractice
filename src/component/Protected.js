import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Protected = (props) => {
  const { component } = props;
  const navigate = useNavigate();
  const users = useSelector((state) => state.user?.email);
  console.log("users", users);
  useEffect(() => {
    // let login = localStorage.getItem("login");
    // if (!users) {
    //   navigate("/login");
    // }
    !users && navigate("/login");
  }, [users]);

  return <div>{props.children}</div>;
};
