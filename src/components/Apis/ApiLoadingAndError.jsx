import React from "react";
import { useState, useEffect } from "react";
const ApiLoadingAndError = () => {
  const [store, setStore] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); //null = no value , means no error first

  useEffect(() => {
    // fetch("https://this-domain-does-not-exist.example") //Promise :Future result
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => (res.ok ? res.json() : Promise.reject("failed to fetch"))) //Promise : I don’t have the answer now, but I promise to give it to you later
      .then((data) => setStore(data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.toString()}</p>; // convert error obj in to message string

  return <div>ApiLoadingAndError</div>;
};

export default ApiLoadingAndError;
