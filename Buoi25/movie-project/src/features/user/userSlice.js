import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", action.payload);
      state.data = action.payload;
    },
    logout: (state, action) => {
      localStorage.removeItem("user", action.payload);
      state.data = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
