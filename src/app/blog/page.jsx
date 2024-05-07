import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getData = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate:3600}}); // обновит дата через 3600
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"}); // делает новый запрос
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
}

// const BlogPage = ({params}) => {
  // console.log('BlogPage params', params);
const BlogPage = async(props) => {
  //http://localhost:3000/blog?q=fer  BlogPage props { params: {}, searchParams: { q: 'fer' } }

  // console.log('BlogPage props', props);


  const posts = await getData();
  // console.log(posts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Page</h1>
      {
        posts.map(post => (
            <div key={post.id} className={styles.post}>
              <PostCard key={post.name} post={post} />
            </div>
        ))
      }
      
    </div>
  )
};

export default BlogPage;