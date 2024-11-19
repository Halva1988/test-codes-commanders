import { useEffect, useState } from "react";
import { IPost } from "../../types/type";
import getData from "../../lib/getData";
import styles from "./posts.module.css";
import Post from "../../components/main/Post";


const Home = (): JSX.Element => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await getData();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <main>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

export default Home