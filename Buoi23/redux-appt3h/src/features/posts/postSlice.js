import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const getListTodo = createAsyncThunk("post/getListTodo", async () => {
  try {
    const res = await axios.get(
      "https://61b02a623e2aba0017c49636.mockapi.io/Todo",
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("co loi xay ra ", error);
  }
});

export const addTodo = createAsyncThunk(
  "post/addTodo",
  async ({ content, title }) => {
    try {
      const res = await axios.post(
        "https://61b02a623e2aba0017c49636.mockapi.io/Todo",
        {
          title,
          content,
        },
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      return "Có lỗi rồi";
    }
  },
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // addPost: (state, action) => {
    //   // C1:
    //   // state.push({
    //   //   postTitle: action.payload,
    //   //   postId: nanoid(),
    //   // });
    //   // C2
    //   let cloneState = JSON.parse(JSON.stringify(state));
    //   return [
    //     ...cloneState,
    //     { postTitle: action.payload, postId: nanoid(), price: 10 },
    //   ];
    // },
    // sortPost: (state, action) => {
    //   let cloneState = [...state];
    //   cloneState.sort((a, b) => a.price - b.price);
    //   return cloneState;
    // },
  },

  extraReducers(builder) {
    builder
      // getlist todo
      .addCase(getListTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getListTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getListTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // add todo
      .addCase(addTodo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.loading = false;
        // state.data = action.payload;
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
// nếu thay đổi state gốc không cần return
// Nếu clone data thì cần return ra giá trị state mới
export const { addPost, sortPost } = postSlice.actions;
export default postSlice.reducer;
// npx create-react-app redux-appt3h --template redux

// khi dispatch action async (call api ) => redux chia thành 3 action : pending , fullfill, reject
// pending: trạng thái chờ.
// fullfill: thành công.
// reject: thất bái
