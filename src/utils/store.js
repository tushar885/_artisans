import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user";

const store = configureStore({
  reducer: {
    User: user,
  },
});

export default store;
