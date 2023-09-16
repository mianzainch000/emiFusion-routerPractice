import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "zain",
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      console.log("actionLogin", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
