import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter(
        (filteredState) => filteredState._id !== action.payload
      );
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
