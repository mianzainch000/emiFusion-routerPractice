import React from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
    const[searchParams,setSearchParams]=useSearchParams()
    // console.log("Age:",searchParams.get('age'))
    // console.log("City:",searchParams.get('city'))
const age=searchParams.get("age")
const city=searchParams.get("city")
  return (
    <div>
      <h1>Filter</h1>
      <h2>My age is:{age}</h2>
<h2>My city is: {city}</h2>
    </div>
  );
};
