import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../../data";

const initialState = users;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;


export const userSelector = (state)=>state.users