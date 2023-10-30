import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";
import admin from "./slices/admin";
import map from "./slices/map";

const store = configureStore({
  reducer: {
    User: user,
    Admin: admin,
    Map: map,
  },
});

export default store;
