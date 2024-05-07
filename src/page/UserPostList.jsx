import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	getPostByUserId,
	postsSelector,
} from "../globalState/feature/posts/postsSlice";

const UserPostList = () => {
	const { userId } = useParams();
	const user = useSelector((state) =>
		state.users.find((user) => user.id === Number(userId))
	);

	const postForUser = useSelector((state) => {
		return getPostByUserId(state, Number(userId));
	});

	const postTitle = postForUser.map((post) => (
		<li key={post.id}>
			<Link to={`/post/${post.id}`}>{post.title}</Link>
		</li>
	));
	return (
		<section className="userListPage">
			<h2>{user?.name}'s Posts</h2>
			<ol>{postTitle}</ol>
		</section>
	);
};

export default UserPostList;
