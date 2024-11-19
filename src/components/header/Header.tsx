import { Link } from "react-router-dom";
import styles from "./Header.module.css"

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Link to="/">
				<div className={styles.logo}>Logo</div>
			</Link>
			<Link to="/signin">
				<button className={styles.button}>SignIn</button>
			</Link>
		</header>
	);
};

export default Header;
