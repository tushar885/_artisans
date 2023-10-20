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
    updateKhojoProfile: (state, action) => {
      state.user.khojoUserProfiles = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export default userSlice.reducer;
export const { signIN, signOut, updateKhojoProfile } = userSlice.actions;
