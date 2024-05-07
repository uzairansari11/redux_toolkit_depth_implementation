import { useSelector } from "react-redux";
import {
	selectPostIds,
	getPostError,
	getPostStatus,
	postsSelector,
} from "../globalState/feature/posts/postsSlice";
import PostExcerpt from "./PostExcerpt";
import Loader from "./Loader";

const PostsList = () => {
	const postsIds = useSelector(selectPostIds);
	const postStatus = useSelector(getPostStatus);
	const postError = useSelector(getPostError);

	let content;
	if (postStatus === "loading") {
		content = <Loader />;
	} else if (postStatus === "success") {
		content = postsIds.map((postId) => {
			return <PostExcerpt postId={postId} key={postId} />;
		});
	} else if (postStatus === "failed") {
		content = <p>{postError}</p>;
	}
	return (
		<div>
			<div className="postListContainer">{content}</div>
		</div>
	);
};

export default PostsList;
