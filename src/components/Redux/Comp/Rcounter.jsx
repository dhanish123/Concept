import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../Store/CounterSlice";

export default function Rcounter() {          //useSelector :Reads data from Redux store.ReactHook
  const count = useSelector((state) => state.counter.value);//If Redux store is { counter: { value: 5 } }, then count will  5.
  const dispatch = useDispatch(); // useDispatch(); take mobile & open whatsup (tool)
                                
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button> {/*dispatch : Send Message */}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
