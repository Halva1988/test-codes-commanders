import { IMapLinkProps } from "../../types/type";
import styles from "./Map.module.css";

const Map = ({ lat, lng }: IMapLinkProps): JSX.Element => {
	const mapIrl = `https://www.google.com/maps?q=${lat},${lng}`;
	return (
		<p className={styles.map}>
			<a href={mapIrl} target="_blank" rel="noreferrer noopener">
				Open location in Google Maps
			</a>
		</p>
	);
};

export default Map;
