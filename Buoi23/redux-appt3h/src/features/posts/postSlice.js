import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    postTitle: "Bata default20",
    price: 20,
    postId: 1,
  },
  {
    postTitle: "Aata default 50",
    price: 50,
    postId: 2,
  },
  {
    postTitle: "Aata default 30",
    price: 30,
    postId: 2,
  },
];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      // state.push({
      //   postTitle: action.payload,
      //   postId: nanoid(),
      // });

      let cloneState = JSON.parse(JSON.stringify(state));
      return [
        ...cloneState,
        { postTitle: action.payload, postId: nanoid(), price: 10 },
      ];
    },
    sortPost: (state, action) => {
      let cloneState = [...state];
      cloneState.sort((a, b) => a.price - b.price);
      return cloneState;
    },
  },
});
// nếu thay đổi state gốc không cần return
// Nếu clone data thì cần return ra giá trị state mới
export const { addPost, sortPost } = postSlice.actions;
export default postSlice.reducer;
