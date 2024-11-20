import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import PostInfo from "./pages/postInfo/postInfo";
import UserInfo from "./pages/userInfo/userInfo";


function App() {
	return (
		<Router basename="/test-codes-commanders">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/userInfo" element={<UserInfo />} />
				<Route path="/postInfo/:postId" element={<PostInfo />} />
			</Routes>
		</Router>
	);
}

export default App;
