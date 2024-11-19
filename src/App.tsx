import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import UserInfo from "./pages/userInfo/userInfo";
import PostInfo from "./pages/postInfo/postInfo";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/userInfo" element={<UserInfo />} />
				<Route path="/postInfo/:postId" element={<PostInfo />} />
			</Routes>
		</Router>
	);
}

export default App;
