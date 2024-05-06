import React from "react";
import { reactionEmoji } from "../data";
import { useDispatch } from "react-redux";
import { addReaction } from "../globalState/feature/posts/postsSlice";
const ReactionButton = ({ post }) => {
	const dispatch = useDispatch();
	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				onClick={() =>
					dispatch(addReaction({ postId: post.id, reaction: name }))
				}
				className="reactionButton"
			>
				<span>{emoji}</span>
				<span>{post.reaction[name]}</span>
			</button>
		);
	});
	return <div>{reactionButtons}</div>;
};

export default ReactionButton;
