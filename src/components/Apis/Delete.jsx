import React, { useState } from "react";

const Delete=()=> {
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  async function handleDelete() {
    setStatus("loading");

    try {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/users/4",
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Delete failed");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <button onClick={handleDelete} disabled={status === "loading"}>
        {status === "loading" ? "Deleting..." : "Delete User"}
      </button>

      {status === "success" && (
        <p style={{ color: "green" }}>User deleted</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>Delete failed</p>
      )}
    </div>
  );
}

export default Delete;
