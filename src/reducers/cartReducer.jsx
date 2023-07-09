import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action) {
      let existingProduct = state.find(
        (food) => food._id === action.payload._id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
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
