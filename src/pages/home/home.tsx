import styles from "./posts.module.css";
import Post from "../../components/main/Post";
import { useGetPostsQuery } from "../../services/postApi";

const Home = (): JSX.Element => {
  const {data: posts, error, isLoading} = useGetPostsQuery();

  return (
    <main>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      {isLoading && <h2>Loading...</h2>}
			{error && <h2>Error...</h2>}
    </main>
  );
}

export default Home