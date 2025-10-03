import { configureStore } from '@reduxjs/toolkit';
import counterReduce from './../slice/countSlice';
import cartReduce from './../slice/cartSlice';
import userReduce from './../slice/userSlice';

const store = configureStore({
  reducer: {
    counter: counterReduce,
    cart: cartReduce,
    users: userReduce,
  },
});

export default store;
