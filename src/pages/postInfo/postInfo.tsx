import { useParams } from "react-router-dom";
import { useGetCommentsQuery } from "../../services/postApi";
import styles from "./postInfo.module.css";

const PostInfo = (): JSX.Element => {
	const postId = useParams().postId ?? "";
	const { data, error, isLoading } = useGetCommentsQuery(postId);

	if (isLoading) return <h2>Loading...</h2>;
	if (error) return <h2>Error...</h2>;

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Post info</h2>
			{data && (
				<div className={styles.post}>
					<p><span>PostId: </span>{data[0].postId}</p>
					<p><span>id: </span>{data[0].id}</p>
					<h3><span>Name: </span>{data[0].name}</h3>
					<p><span>Email: </span>{data[0].email}</p>
					<p><span>Description: </span>{data[0].body}</p>
				</div>
			)}
		</div>
	);
};

export default PostInfo;
