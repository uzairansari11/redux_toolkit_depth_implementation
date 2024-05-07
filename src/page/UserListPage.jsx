import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../globalState/feature/users/usersSlice";
import { Link } from "react-router-dom";

const UserListPage = () => {
	const users = useSelector(userSelector);
	const renderUser = users.map((user) => (
		<li key={user.id}>
			<Link to={`/user/${user.id}`}>{user.name}</Link>
		</li>
	));
	return (
		<div className="userListPage">
			<h2>Users List</h2>
			<ol>{renderUser}</ol>
		</div>
	);
};

export default UserListPage;
