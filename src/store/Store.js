import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../reducers/cartReducer";
import locationSlice from "../reducers/locationSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
    location: locationSlice,
  },
});
export default store;
