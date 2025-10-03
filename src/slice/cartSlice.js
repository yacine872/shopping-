import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
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
      return 0;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
