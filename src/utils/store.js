import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import admin from "./slices/admin";

const store = configureStore({
  reducer: {
    User: user,
    Admin: admin,
  },
});

export default store;
