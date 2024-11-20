import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import SignIn from "../button/SignIn";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import UserLogo from "../userLogo/UserLogo";

const Header: React.FC = (): JSX.Element => {
	const user = useSelector((state: RootState) => state.user.user);

	return (
		<header className={styles.header}>
			<Link to="/">
				<div className={styles.logo}>Logo</div>
			</Link>
			{user ? <UserLogo /> : ""}
			<SignIn />
		</header>
	);
};

export default Header;
