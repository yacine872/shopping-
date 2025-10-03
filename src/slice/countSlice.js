import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "counter",
  initialState: {
    count: 100,
  },

  reducers: {
    incrCount(state, action) {
      state.count += 1;
    },

    decrCount(state, action) {
      state.count -= 1;
    },

    addCount(state, action) {
      //   console.log(action);
      state.count += action.payload;
    },

    initCount(state) {
      state.count = 0;
    },
  },
});

export const counterAction = countSlice.actions;
export default countSlice.reducer;
