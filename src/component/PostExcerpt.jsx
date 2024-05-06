import React from "react";
import AuthorName from "./AuthorName";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostExcerpt = ({ post }) => {
	return (
		<article>
			<h3>{post.title}</h3>
			<p>{post.body.substring(0, 100)}</p>
			<p>
				Written <AuthorName userId={post.userId} />
				<TimeAgo timeStamp={post.date} />
			</p>
			<ReactionButton post={post} />
		</article>
	);
};

export default PostExcerpt;
