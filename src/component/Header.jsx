import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
			</nav>
		</header>
	);
};

export default Header;
