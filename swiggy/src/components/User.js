import { useState } from "react";

const user = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h3>{contact}</h3>
    </div>
  );
};

export default user;
