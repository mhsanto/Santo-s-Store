import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {},
  reducers: {
    address: (state, action) => {
      state.object = action.payload;
    },
  },
});
export const { address } = locationSlice.actions;
export default locationSlice.reducer;
