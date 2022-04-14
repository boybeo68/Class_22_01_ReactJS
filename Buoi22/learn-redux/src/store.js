import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./feature/nameSlice";
export default configureStore({
  reducer: {
    test: nameReducer,
  },
});
