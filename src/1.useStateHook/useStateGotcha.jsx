import React, { useState } from "react";

const useStateGotcha = () => {
  const [value, setValue] = useState(0);

  //   const handleClick = () => {
  //     setValue(value + 1);
  //   };

  const handleClick = () => {
    // setValue((currentState) => {
    //   const newState = currentState + 1;
    //   return newState;
    // });

    setTimeout(() => {
      console.log("clicked the button");
      setValue((currentState) => {
        return currentState + 1;
      });
    }, 3000);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  );
};

export default useStateGotcha;
