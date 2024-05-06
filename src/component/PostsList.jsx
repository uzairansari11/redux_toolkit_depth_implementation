import React from "react";
import { useSelector } from "react-redux";
import { postsSelector } from "../globalState/feature/posts/postsSlice";
import AuthorName from "./AuthorName";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostsList = () => {
  const posts = useSelector(postsSelector);
  const renderPostList = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p>
          Written <AuthorName userId={post.userId} />
          <TimeAgo timeStamp={post.date} />
        </p>
        <ReactionButton post={post} />
      </article>
    );
  });
  return (
    <div>
      <h3 className="postListHeading">PostsList</h3>
      <div className="postListContainer">{renderPostList}</div>
    </div>
  );
};

export default PostsList;
