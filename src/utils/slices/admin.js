import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "Admin",
  initialState: {
    allUsers: [],
    allTemplates: [],
  },
  reducers: {
    populate_allUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    populate_allTemplates: (state, action) => {
      state.allTemplates = action.payload;
    },
  },
});

export default adminSlice.reducer;
export const { populate_allUsers, populate_allTemplates } = adminSlice.actions;
