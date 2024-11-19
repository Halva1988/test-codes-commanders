import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/home";
import UserInfo from "./pages/userInfo/userInfo";

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/userInfo" element={<UserInfo />} />
			</Routes>
		</Router>
	);
}

export default App;
