import React, { useState } from "react";

const TerneryOperator = () => {
  const [text, setText] = useState("");

  const [name, setName] = useState("ganesh");

  const [user, setUser] = useState({ name: "john" });

  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
        
      )} */}
      {user && <SomeComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0 " }}>TerneryOperator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button>
      {user ? (
        <div>
          <h4>hello there user {user.name}</h4>
        </div>
      ) : (
        <div>
          <h4>please Login</h4>
        </div>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default TerneryOperator;
