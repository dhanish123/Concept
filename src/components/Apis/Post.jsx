import React, { useState } from "react";

function Post() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Failed to add user");
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required  //ensures input not empty before submit
      />
      <button type="submit" disabled={status === "loading"}>  {/*Disabled when status is "loading" prevent multiple submits. */}
        {status === "loading" ? "Adding..." : "Add User"}  {/*show "Adding..." waiting server, otherwise "Add User". */}
      </button>
      {status === "error" && <p style={{ color: "red" }}>Error occurred</p>}
      {status === "success" && <p style={{ color: "green" }}>User added!</p>}
    </form>
  );
}

export default Post;
