import styles from "./posts.module.css";
import Post from "../../components/main/Post";
import { useGetPostsQuery } from "../../services/postApi";

const Home = (): JSX.Element => {
  const {data: posts, error, isLoading} = useGetPostsQuery();

  if (isLoading) return <h2>Loading...</h2>
  if (error) return <h2>Error...</h2>

  return (
    <main>
      <div className={styles.posts}>
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Home