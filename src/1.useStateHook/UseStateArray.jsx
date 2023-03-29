import React from "react";
import { data } from "../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const clearAllItems = () => {
    setPeople([]);
  };

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        console.log(person);
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type="button"
        style={{ marginTop: "2rem" }}
        className={"btn"}
        //onClick={clearAllItems}
        onClick={() => setPeople([])}
      >
        clear Items
      </button>
    </div>
  );
};

export default UseStateArray;
