import React from "react";
import usedZusStore from "./useZusStore ";

function ZusCounter() {
  const { count, increment, decrement } = usedZusStore();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default ZusCounter;
