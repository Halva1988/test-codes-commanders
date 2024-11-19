import { IPost } from "../../types/type";
import styles from "./Post.module.css";

const Post = ({ post }: { post: IPost }): JSX.Element => {
	return (
		<div className={styles.post}>
			<h2>{post.title.slice(0, 15) + "..."}</h2>
			<p className={styles.body}>{post.body.slice(0, 90) + "..."}</p>
			<p className={styles.body}>id: {post.id}</p>
			<p className={styles.body}>userId: {post.userId}</p>
		</div>
	);
};

export default Post;