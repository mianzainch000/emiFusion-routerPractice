import React from "react";
import { useParams,useLocation } from "react-router-dom";

export const User = () => {
  const locaction=useLocation()
  console.log(locaction)
    const params=useParams()
    const {name}=params
  return (
    <div>
      <h1>This is {name} page</h1>
    </div>
  );
};
