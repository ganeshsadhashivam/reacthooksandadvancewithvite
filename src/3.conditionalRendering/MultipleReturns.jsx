import React from "react";
import { useEffect, useState } from "react";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //fetching data
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <div>MultipleReturns</div>;
};

export default MultipleReturns;
