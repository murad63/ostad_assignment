import Link from 'next/link';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js Blog!</h1>
      <Link href="/blog">Go to Blog</Link>
    </div>
  );
};

export default Home;