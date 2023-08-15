import blogData from '../../../data/blogData.json';

const Post = ({ params }) => {
  
  const post = blogData.find((post) => post.id === parseInt(params.id));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className='container'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
};

export default Post;