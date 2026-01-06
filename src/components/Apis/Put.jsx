import React, { useState, useEffect } from "react";
//PUT replaces whole user → need full data → useEffect fetch.
const Put = () => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(setUser);
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user), // Server updates entire field
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <form onSubmit={handleUpdate}>
      <input value={user.name} onChange={e => setUser({ ...user, name: e.target.value })} />
      <button type="submit">Update (PUT)</button>
      {status && <p>{status}</p>}
    </form>
  );
};

export default Put;

//entire data
// {
//   "id": 1,
//   "name": "Bob",
//   "email": "alice@example.com",
//   "phone": "123-456"
// }