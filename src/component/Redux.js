import React from "react";
import { createSlice } from "@reduxjs/toolkit";
export const Redux = () => {
  const Slice = createSlice({
    name: "zain",
    initialState: {
      user: null,
      isAuthenticated: false,
    },
    reducers: {
      login(state, action) {
        state.user = action.payload;
        state.isAuthenticated = true;
      },
      logout(state) {
        state.user = null;
        state.isAuthenticated = false;
      },
    },
  });

  return <div>Redux</div>;
};
// export const { login, logout } = Slice.actions;
// export default Slice.reducer;
