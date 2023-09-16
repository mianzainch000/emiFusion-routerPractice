import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Slice/authSlice";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
