import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./globalState/store";
import { fetchUser } from "./globalState/feature/users/usersSlice";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fetchPosts } from "./globalState/feature/posts/postsSlice";
store.dispatch(fetchUser());
store.dispatch(fetchPosts());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>
);
