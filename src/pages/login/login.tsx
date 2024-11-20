import { RootState } from "../../app/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserByUsernameQuery } from "../../services/postApi";
import { setUser } from "../../slices/userSlice";
import { handleError } from "../../utils/errorHandler";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/toast/Toast";
import styles from "./login.module.css";

const Login = (): JSX.Element => {
	const [username, setUsername] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user.user);
	const navigate = useNavigate();
	const inputRef = useRef<HTMLInputElement>(null);

	const { data, error, isLoading } = useGetUserByUsernameQuery(username);

	if (error) {
		handleError(error);
	}
	const handleSignIn = (event: React.FormEvent) => {
		event.preventDefault();
		if (data && data.length > 0) {
			dispatch(setUser(data[0]));
			navigate("/");
		} else {
			setToastMessage("User not found");
		}
	};

	const handleCloseToast = () => {
		setToastMessage("");
	};

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [])

	return (
		<div className={styles.container}>
			{!user && (
				<form onSubmit={handleSignIn} className={styles.login}>
					<h1>SignIn</h1>
					<input
						className={styles.input}
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username text field"
						ref={inputRef}
					/>
					<button type="submit" className={styles.button}>
						Send Button
					</button>
				</form>
			)}
			{isLoading && <h2>Loading...</h2>}
			{toastMessage && (
				<Toast message={toastMessage} onClose={handleCloseToast} />
			)}
		</div>
	);
};

export default Login;
