import { configureStore } from "@reduxjs/toolkit";  //configureStore = setup Redux store easy.
import counterReducer from "./CounterSlice";  //counterReducer = just a name fro call the clounterSlice Comp and use here

const Store = configureStore({
  reducer: { counter: counterReducer },   //counter(state name) : value:0
});                                       //counterReducer decides how update counter part(inre/Decre).

export default Store;                