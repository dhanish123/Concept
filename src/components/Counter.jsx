import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  // const decrement =()=>setCount(count - 1)
  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));  //prev means current state / latest state
  };
  return (
    <div>
      <h1>The count is :{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
