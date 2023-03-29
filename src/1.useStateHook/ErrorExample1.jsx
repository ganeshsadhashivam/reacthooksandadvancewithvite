import React from "react";

const ErrorExample1 = () => {
  let count = 0;

  const handleButton = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleButton} className="btn">
        increase
      </button>
    </div>
  );
};

export default ErrorExample1;
