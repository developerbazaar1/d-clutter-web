// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: null, // 'customer' or 'serviceProvider'
  user: null, // User info
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
