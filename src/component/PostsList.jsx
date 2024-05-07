import { useSelector } from "react-redux";
import {
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
			<div className="postListContainer">{content}</div>
		</div>
	);
};

export default PostsList;
