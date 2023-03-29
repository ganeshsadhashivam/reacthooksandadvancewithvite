import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "read boooks",
  });

  //   const [name, setName] = useState("peter");
  //   const [age, setAge] = useState(24);
  //   const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    // setName("john");
    // setAge(29);
    // setHobby("coding");
    // setPerson("shakeBakae");
    setPerson({ ...person, name: "susan" });
  };

  return (
    <div>
      <h2>{person.name}</h2>
      <h3>{person.age}</h3>
      <h4>Enjoys:{person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </div>
  );
};

export default UseStateObject;
