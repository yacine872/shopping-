import { configureStore } from "@reduxjs/toolkit";
import counterReduce from "./../slice/countSlice";
import cartReduce from "./../slice/cartSlice";

const store = configureStore({
  reducer: {
    counter: counterReduce,
    cart: cartReduce,
  },
});

export default store;
