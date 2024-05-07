import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// const BlogPage = ({params}) => {
  // console.log('BlogPage params', params);
const BlogPage = (props) => {
  //http://localhost:3000/blog?q=fer  BlogPage props { params: {}, searchParams: { q: 'fer' } }

  console.log('BlogPage props', props);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Page</h1>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
};

export default BlogPage;