import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartReducer";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
