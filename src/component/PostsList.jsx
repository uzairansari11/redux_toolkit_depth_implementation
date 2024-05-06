import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	fetchPosts,
	getPostError,
	getPostStatus,
	postsSelector,
} from "../globalState/feature/posts/postsSlice";
import PostExcerpt from "./PostExcerpt";
import Loader from "./Loader";

const PostsList = () => {
	const posts = useSelector(postsSelector);
	const postStatus = useSelector(getPostStatus);
	const postError = useSelector(getPostError);
	const dispatch = useDispatch();

	useEffect(() => {
		if (postStatus === "idle") {
			dispatch(fetchPosts());
		}
	}, [dispatch, postStatus]);
	let content;
	if (postStatus === "loading") {
		content = <Loader />;
	} else if (postStatus === "success") {
		content = posts.map((post) => {
			return <PostExcerpt post={post} key={post.id} />;
		});
	} else if (postStatus === "failed") {
		content = <p>{postError}</p>;
	}
	return (
		<div>
			<h3 className="postListHeading">PostsList</h3>
			<div className="postListContainer">{content}</div>
		</div>
	);
};

export default PostsList;
