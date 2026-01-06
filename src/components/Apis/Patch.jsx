import React, { useState } from "react";
//PATCH updates partial → just send fields you want → no fetch needed.
const Patch = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  async function handleUpdate(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }), // Server updates onlyname field.
      });

      if (!res.ok) throw new Error("Failed to update user");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleUpdate}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="New name"
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Updating..." : "Update User (PATCH)"}
      </button>
      {status === "error" && <p style={{ color: "red" }}>Error occurred</p>}
      {status === "success" && <p style={{ color: "green" }}>User updated!</p>}
    </form>
  );
};

export default Patch;


//// {
//   "name": "Bob"
// }