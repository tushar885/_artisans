import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    jwtToken: null,
  },
  reducers: {
    signIN: (state, action) => {
      state.user = action.payload.user;
      state.jwtToken = action.payload.jwtToken;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    signOut: (state, action) => {
      localStorage.removeItem("user");
      state.user = null;
      state.jwtToken = null;
    },
  },
});

export default userSlice.reducer;
export const { signIN, signOut } = userSlice.actions;
