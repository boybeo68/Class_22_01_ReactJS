import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    postTitle: "Bata default",
    postId: 1,
  },
  {
    postTitle: "Aata default 2",
    postId: 2,
  },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push({
        postTitle: action.payload,
        postId: nanoid(),
      });
      // state.push(action.payload);
    },
    sortPost: (state, action) => {
      // state.sort((a, b) => b.name - a.name);
    },
  },
});
export const { addPost, sortPost } = postSlice.actions;
export default postSlice.reducer;
