import { createSlice } from "@reduxjs/toolkit";

const mapSlice = createSlice({
  name: "Map",
  initialState: {
    count: 0,
    profiles: [],
  },

  reducers: {
    populateMap: (state, action) => {
      (state.count = action.payload.count),
        (state.profiles = action.payload.profiles);
    },
  },
});

export default mapSlice.reducer;

export const { populateMap } = mapSlice.actions;
