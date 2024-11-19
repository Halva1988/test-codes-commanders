import { RootState } from "../../app/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserByUsernameQuery } from "../../services/postApi";
import { setUser } from "../../slices/userSlice";
import { handleError } from "../../utils/errorHandler";
import styles from "./userInfo.module.css";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/toast/Toast";

const UserInfo = () => {
	const [username, setUsername] = useState("");
	const [toastMessage, setToastMessage] = useState("");
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user.user);
	const navigate = useNavigate();

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

	return (
		<div className={styles.container}>
			{!user && (
				<form onSubmit={handleSignIn} className={styles.userInfo}>
					<h1>SignIn</h1>
					<input
						className={styles.input}
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Username text field"
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

export default UserInfo;
