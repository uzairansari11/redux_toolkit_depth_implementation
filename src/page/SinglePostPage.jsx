import { useSelector } from "react-redux";
import { postsSelectorById } from "../globalState/feature/posts/postsSlice";
import AuthorName from "../component/AuthorName";
import TimeAgo from "../component/TimeAgo";
import ReactionButton from "../component/ReactionButton";
import { Link, useParams } from "react-router-dom";

const SinglePostPage = () => {
	const { postId } = useParams();
	const post = useSelector((state) => postsSelectorById(state, Number(postId)));

	if (!post) {
		<section>
			<h2>Post not found !</h2>
		</section>;
	}
	return (
		<article>
			<h3>{post?.title}</h3>
			<p>{post?.body}</p>
			<p>
				Written <AuthorName userId={post?.userId} />
				<TimeAgo timeStamp={post?.date} />
			</p>
			<ReactionButton post={post} />
			<Link to={`/post/edit/${post?.id}`}>Edit Post</Link>
		</article>
	);
};

export default SinglePostPage;
