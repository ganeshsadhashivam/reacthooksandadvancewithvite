import React from "react";
import { useState } from "react";
const ShortCircuit = () => {
  //falsy
  const [text, setText] = useState("");
  //truthy
  const [name, setName] = useState("ganesh");

  const codeExample = text || "hello wolrd";
  return (
    <div>
      <h4>falsy OR : {text || "hello world"}</h4>
      <h4>falsy AND : {text && "hello world"}</h4>
      <h4>falsy OR : {name || "hello world"}</h4>
      <h4>falsy AND : {name && "hello world"}</h4>
      {codeExample}
    </div>
  );
};

export default ShortCircuit;
