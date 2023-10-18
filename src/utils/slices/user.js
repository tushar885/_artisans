import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    count: 0,
  },
  reducers: {
    upCount: (state, action) => {
      state.count = state.count + 1;
    },
  },
});

export default userSlice.reducer;
export const { upCount } = userSlice.actions;
