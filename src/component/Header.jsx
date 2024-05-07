import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
	getCount,
	incrementCountPost,
} from "../globalState/feature/posts/postsSlice";

const Header = () => {
	const countValue = useSelector(getCount);
	const dispatch = useDispatch();
	return (
		<header className="blogHeader">
			<h1>Redux Blogs</h1>
			<nav>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="post">Post</Link>
				</li>
				<li>
					<Link to="user">Users</Link>
				</li>
				<button onClick={() => dispatch(incrementCountPost())}>
					{countValue}
				</button>
			</nav>
		</header>
	);
};

export default Header;
