import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styles from "./userInfo.module.css";
import { IUser } from "../../types/type";
import Map from "../../components/map/Map";

const UserInfo = (): JSX.Element => {
	const user: IUser | null = useSelector((state: RootState) => state.user.user);
	const lat = Number(user?.address.geo.lat);
	const lng = Number(user?.address.geo.lng);

	return (
		<>
			{user && (
				<div className={styles.container}>
					<h1>Information about user</h1>
					<p>
						<span>Name: </span>
						{user.name}
					</p>
					<p>
						<span>Nickname: </span>
						{user.username}
					</p>
					<p>
						<a href={`mailto:${user.email}`}>
							<span>Email: </span>
							{user.email}
						</a>
					</p>
					<p>
						<span>Address: </span>
						{user.address.city}, {user.address.street}, {user.address.suite},{" "}
						{user.address.zipcode}
					</p>
					<Map lat={lat} lng={lng} />
					<p>
						<a href={`tel:${user.phone}`}>
							<span>Phone: </span>
							{user.phone}
						</a>
					</p>
					<p>
						<a href={`https://${user.website}`} target="_blank" rel="noreferrer noopener">
						<span>Website: </span>
						{user.website}
						</a>
					</p>
					<p>
						<span>Company name: </span>
						{user.company.name}
					</p>
					<p>
						<span>Catch Phrase: </span>
						{user.company.catchPhrase}
					</p>
					<p>
						<span>Slogan: </span>
						{user.company.bs}
					</p>
				</div>
			)}
		</>
	);
};

export default UserInfo;
