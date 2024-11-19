import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import SignIn from "../button/SignIn";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<div className={styles.logo}>Logo</div>
			</Link>
				<SignIn/>
		</header>
	);
};

export default Header;
