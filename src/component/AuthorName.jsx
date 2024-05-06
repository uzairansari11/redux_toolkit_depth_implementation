import { useSelector } from "react-redux";
import { userSelector } from "../globalState/feature/users/usersSlice";

const AuthorName = ({ userId }) => {
	const userList = useSelector(userSelector);
	const author = userList.find((user) => user.id === userId);
	return <span> by {author ? author.name : "Unknown Author"}</span>;
};

export default AuthorName;
