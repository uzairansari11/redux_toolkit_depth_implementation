import React from "react";
import AuthorName from "./AuthorName";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelectorById } from "../globalState/feature/posts/postsSlice";

const PostExcerpt = ({ postId }) => {
	const post = useSelector((state) => postsSelectorById(state, postId));
	return (
		<article>
			<h3>{post?.title}</h3>
			<p>{post?.body.substring(0, 75)}...</p>
			<p>
				Written <AuthorName userId={post.userId} />
				<TimeAgo timeStamp={post.date} />
				<Link to={`post/${post?.id}`}>View Post</Link>
			</p>
			<ReactionButton post={post} />
		</article>
	);
};

export default PostExcerpt;
