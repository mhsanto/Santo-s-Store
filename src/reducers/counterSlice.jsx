import { createSlice } from "@reduxjs/toolkit";
const initialState = 0;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addFood: (state) => state + 1,
    removeFood: (state) => state > 0 && state - 1,
  },
});
export const { addFood, removeFood } = counterSlice.actions;
export default counterSlice.reducer;
