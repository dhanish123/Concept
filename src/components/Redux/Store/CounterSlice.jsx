// This code creates a counter state using Redux Toolkit’s
// createSlice is fn inside Redux Toolkit
import { createSlice } from "@reduxjs/toolkit"; // using createSlice ,Manage state, actions, reducers in single file

const CounterSlice = createSlice({
  name: "counter", //Name of state/slice
  initialState: { value: 0 }, //Start state
  reducers: {
    //fn inside reducers that changes state based that action
    increment: (state) => {
      state.value += 1;
    }, //calling increment() or decrement() to tell what you want
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = CounterSlice.actions; //This action telling Redux to add 1 , other comp:dispatch(increment());
export default CounterSlice.reducer; // reducer runs this code: state.value += 1;
