//tool fro dev, not show anything to user 
//find mistake early

import { useState, useEffect } from "react";

const StrictApp = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {                              // First mount → useEffect runs → console: "useEffect runs"
    console.log("useEffect runs");               // Unmount → (StrictMode test) in app.jsx
  }, []); // still empty, runs once per mount  // Second mount → useEffect runs → console: "useEffect runs"
                                                 // so in console it shows 2 times 
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
};

export default StrictApp;