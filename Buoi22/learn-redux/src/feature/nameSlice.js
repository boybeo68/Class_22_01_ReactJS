import { createSlice } from "@reduxjs/toolkit";
export const nameSlice = createSlice({
  name: "name",
  initialState: "Data from store",
  reducers: {},
});
export default nameSlice.reducer;
