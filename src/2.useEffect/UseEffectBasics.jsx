import React from "react";
import { useState, useEffect } from "react";
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log("hello there");
  };

  sayHello();
  //if dependency array is given only runs once at initial render
  useEffect(() => {
    console.log("hello from useEffect");
  }, []);
  return (
    <div>
      <h1>value:{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};

export default UseEffectBasics;