// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPostForm from "./component/AddPostForm";
import PostsList from "./component/PostsList";
import Layout from "./component/Layout";
import SinglePostPage from "./page/SinglePostPage";
import EditPostPage from "./page/EditPostPage";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<PostsList />} />

				<Route path="post">
					<Route index element={<AddPostForm />} />
					<Route path=":postId" element={<SinglePostPage />} />
					<Route path="edit/:postId" element={<EditPostPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
