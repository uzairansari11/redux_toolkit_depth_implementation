import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counter/counterSlice";
import postsSlice from "./feature/posts/postsSlice";
import usersSlice from "./feature/users/usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    users: usersSlice,
  },
});
