import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { users } from "../../../data";
import axios from "axios";

const initialState = [];

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`);
		return response.data;
	} catch (error) {
		return error.message;
	}
});
export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const {} = usersSlice.actions;

export default usersSlice.reducer;

export const userSelector = (state) => state.users;
export const userSelectorById = (state, userId) =>
	state.users.find((user) => user.id === userId);
