import React, { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "ganesh" });
    console.log("login");
  };

  const logOut = () => {
    setUser(null);
    console.log("logOut");
  };
  return (
    <div>
      {user ? (
        <>
          <h4>hello, there{user.name}</h4>
          <button className="btn" onClick={logOut}>
            logout
          </button>
        </>
      ) : (
        <>
          <h4>pls log in</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </>
      )}
    </div>
  );
};

export default UserChallenge;
