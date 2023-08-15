import Link from 'next/link';
import blogData from '../../data/blogData.json';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <div className='flex flex-col gap-2 mt-5 pt-16 text-white align-center'>
            <Link href={`/post/${post.id}`} className="bg-gray-500 px-5 py-3 my-1  text-lg font-bold rounded-lg  ">{post.title}</Link>
            </div>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;