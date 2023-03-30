import React, { useState, useEffect } from "react";

const CleanUpFunctions = () => {
  const [toggle, setToggle] = useState(false);
  console.log("render");
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("hmm this is interesting");
    const intId = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log("cleaup");
    };
  }, []);
  return <h1>hello there</h1>;
};

export default CleanUpFunctions;
