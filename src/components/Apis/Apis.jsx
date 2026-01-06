import React from "react";
import { useState, useEffect } from "react";

const Apis = () => {
    const [user, setuser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setuser(data));
  }, []);
  return (
    <div>
      <h2>users</h2>{" "}
      {user.map((user) => (
        <p key={user.id}>Name:{user.name}</p>
      ))}
    </div>
  );
};

export default Apis;
