import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturnsFetchData2 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState();

  const fetchUser = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const user = await response.json();
      console.log(user);
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an Error</h2>;
  }

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        src={avatar_url}
        style={{ width: "150px", borderRadius: "25px" }}
        alt=""
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default MultipleReturnsFetchData2;
