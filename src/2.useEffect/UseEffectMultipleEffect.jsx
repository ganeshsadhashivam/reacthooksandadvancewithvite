import React from "react";
import { useState, useEffect } from "react";
const UseEffectMultipleEffect = () => {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("hello from the first useEffect");
  }, [value]);

  useEffect(() => {
    console.log("hello from the second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>value:{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        value
      </button>
      <h1>value:{secondValue}</h1>
      <button className="btn" onClick={() => setSecondValue(secondValue + 1)}>
        value
      </button>
    </div>
  );
};

export default UseEffectMultipleEffect;
