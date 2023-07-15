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
      let existingProductIndex = state.findIndex(
        (food) => food._id === action.payload._id
      );
      console.log(existingProductIndex);
      if (existingProductIndex !== -1) {
        let existingProduct = state[existingProductIndex];
        if (existingProduct.quantity === 1) {
          state.splice(existingProductIndex, 1); // Remove the product from the cart
        } else {
          existingProduct.quantity -= 1; // Decrement the quantity
        }
      } else {
        state.push({ ...action.payload, quantity: 1 }); // Add the product to the cart with quantity 1
      }
    },
  },
});
export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
