import React from "react";
import { useState, useEffect } from "react";
const HooksRule = () => {
  const [condition, setCondition] = useState(true);

  //if (condition) {
  //wont work
  //dont place hooks inside condion
  // const [state, setState] = useState(false);
  // }

  if (condition) {
    return <h2>hello there</h2>;
  }

  //this will fail
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <div>HooksRule</div>;
};

export default HooksRule;
