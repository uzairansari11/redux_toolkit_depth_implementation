import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from "axios";
const initialState = {
	posts: [],
	status: "idle", // 'idle' 'loading' 'success' 'failed'
	error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	try {
		const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`);
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const addNewPost = createAsyncThunk("posts/addNewPost", async (data) => {
	try {
		const response = await axios.post(
			`${process.env.REACT_APP_BASE_URL}/posts`,
			data
		);
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const updatePost = createAsyncThunk("posts/updatePost", async (data) => {
	try {
		const response = await axios.put(
			`${process.env.REACT_APP_BASE_URL}/posts/${data.id}`,
			data
		);
		return response.data;
	} catch (error) {
		return error.message;
	}
});
export const deletePost = createAsyncThunk("posts/deletePost", async (data) => {
	try {
		const response = await axios.delete(
			`${process.env.REACT_APP_BASE_URL}/posts/${data.id}`
		);
		return { status: response.status, id: data.id };
	} catch (error) {
		return error.message;
	}
});
export const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded: {
			reducer(state, action) {
				state.posts.push(action.payload);
			},
			prepare(title, body, userId) {
				return {
					payload: {
						id: nanoid(),
						title,
						body,
						userId,
						date: new Date().toISOString(),
						reaction: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				};
			},
		},
		addReaction: (state, action) => {
			const { postId, reaction } = action.payload;
			const postExists = state.posts.find((post) => post.id === postId);
			if (postExists) {
				postExists.reaction[reaction] += 1;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "success";
				let min = 1;
				const loadedPost = action.payload.map((post) => {
					return {
						...post,
						date: sub(new Date(), { minutes: min++ }).toISOString(),
						reaction: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					};
				});
				state.posts = loadedPost;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			})
			.addCase(addNewPost.fulfilled, (state, action) => {
				action.payload.userId = Number(action.payload.userId);
				action.payload.date = new Date().toISOString();
				action.payload.reaction = {
					thumbsUp: 0,
					wow: 0,
					heart: 0,
					rocket: 0,
					coffee: 0,
				};
				console.log(action.payload);
				state.posts.push(action.payload);
			})
			.addCase(updatePost.fulfilled, (state, action) => {
				if (!action.payload.id) {
					console.log("Post can not be updated");
					console.log(action.payload);
					return;
				}
				const { id } = action.payload;

				const post = state.posts.filter((post) => post.id !== id);
				state.posts = [...post, action.payload];
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				if (action.payload.status === 200) {
					const post = state.posts.filter(
						(post) => post.id !== action.payload.id
					);
					state.posts = post;
				}
			});
	},
});

export const postsSelector = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export const postsSelectorById = (state, postId) =>
	state.posts.posts.find((post) => post.id === postId);
export const { postAdded, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
