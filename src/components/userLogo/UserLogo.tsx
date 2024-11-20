import { Link } from "react-router-dom";
import styles from "./UserLogo.module.css";

const UserInfo = (): JSX.Element => {
	return (
		<Link to="/userInfo">
			<img className={styles.userLogo} src="/logo.png" alt="Logo" />
		</Link>
	);
};

export default UserInfo;
