import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { clearUser } from "../../slices/userSlice";

const SignIn: React.FC = (): JSX.Element => {
	const user = useSelector((state: RootState) => state.user.user);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSingIn = () => {
		navigate("/login");
	};

	const handleLogOut = () => {
		dispatch(clearUser());
		navigate("/");
	};

	return (
		<button
			onClick={user ? handleLogOut : handleSingIn}
			className={styles.button}
		>
			{user ? "SignOut" : "SignIn"}
		</button>
	);
};

export default SignIn;
