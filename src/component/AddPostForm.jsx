import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../globalState/feature/posts/postsSlice";
import { userSelector } from "../globalState/feature/users/usersSlice";
const AddPostForm = () => {
	const users = useSelector(userSelector);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [userId, setUserId] = useState("");

	const dispatch = useDispatch();
	const onTitleChange = (e) => {
		setTitle(e.target.value);
	};
	const onContentChange = (e) => {
		setContent(e.target.value);
	};

	const onUserChange = (e) => {
		setUserId(e.target.value);
	};
	const onSavePostClicked = () => {
		if (title && content) {
			dispatch(postAdded(title, content, userId));
		}
		setTitle("");
		setContent("");
		setUserId("");
	};
	const userOptions = users.map((user) => {
		return (
			<option key={user.id} value={user.id}>
				{user.name}
			</option>
		);
	});
	const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
	return (
		<section>
			<h2 className="addPostHeading">Add A Post</h2>
			<form>
				<label htmlFor="postTitle">Post Title</label>
				<input
					type="text"
					id="postTitle"
					name="postTitle"
					value={title}
					onChange={onTitleChange}
					placeholder="Enter Post Title ..."
				/>
				<label htmlFor="postAuthor">Post Author</label>

				<select onChange={onUserChange} value={userId}>
					<option value="" key="">
						Select User
					</option>
					{userOptions}
				</select>
				<label htmlFor="postContent">Post Content</label>
				<input
					type="text"
					id="postContent"
					name="postContent"
					value={content}
					onChange={onContentChange}
					placeholder="Enter Post Content ..."
				/>
				<button disabled={!canSave} onClick={onSavePostClicked} type="button">
					Save Post
				</button>
			</form>
		</section>
	);
};

export default AddPostForm;
