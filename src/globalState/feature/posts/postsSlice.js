import { createSlice, nanoid } from "@reduxjs/toolkit";
import { data } from "../../../data";

const initialState = data;
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
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
      const postExists = state.find((post) => post.id === postId);
      if (postExists) {
        postExists.reaction[reaction] += 1;
      }
    },
  },
});

export const postsSelector = (state) => state.posts;
export const { postAdded, addReaction } = postsSlice.actions;
export default postsSlice.reducer;
