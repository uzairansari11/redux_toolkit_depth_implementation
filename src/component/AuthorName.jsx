import { useSelector } from "react-redux";
import { userSelector } from "../globalState/feature/users/usersSlice";

const AuthorName = ({ userId }) => {
  console.log("userId", userId);
  const userList = useSelector(userSelector);
  console.log(userList, "userList");
  const author = userList.find((user) => user.id === userId);
  console.log(author);
  return <span> by {author ? author.name : "Unknown Author"}</span>;
};

export default AuthorName;
