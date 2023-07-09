import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartReducer";
import counterSlice from "../reducers/counterSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    counter: counterSlice,
  },
});
export default store;
