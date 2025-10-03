import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalItems: 0,
  },

  reducers: {
    addInCart(state, action) {
      const newItem = action.payload;

      const itemAlreadyAdded = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (itemAlreadyAdded) {
        itemAlreadyAdded.quantity += 1;
        itemAlreadyAdded.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
        state.totalItems += 1;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const itemDoesExist = state.itemsList.find((item) => item.id === id);

      try {
        itemDoesExist.quantity -= 1;
        itemDoesExist.totalPrice -= itemDoesExist.price;
        if (itemDoesExist.quantity === 0) {
          state.itemsList = state.itemsList.filter((item) => item.id !== id);
          state.totalItems -= 1;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
