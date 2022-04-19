import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    postTitle: "Data default",
    postId: 1,
  },
  {
    postTitle: "Data default 2",
    postId: 2,
  },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export default postSlice.reducer;
