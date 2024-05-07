import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

const getData = async (id) => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {next: {revalidate:3600}}); // обновит дата через 3600
  // console.log(`https://jsonplaceholder.typicode.com/posts/${id}`);
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache: "no-store"}); // делает новый запрос
  if (!res.ok) throw new Error("Something went wrong");
  const data = await res.json();
  return data;
}

const SinglePostPage = async({params}) => {
// const SinglePostPage = ({params}) => {
  // console.log('SinglePostPage', params);
  // console.log('SinglePostPage', props);
  const post = await getData(params.slug);
  // console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/22590665/pexels-photo-22590665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className={styles.img}  
          fill/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          {/* <Image 
            className={styles.avatar} 
            src="https://images.pexels.com/photos/22590665/pexels-photo-22590665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="" 
            width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              {/* Terry Jefferson */}
              {/* {post.id} */}
            {/* </span> */}
          {/* </div> */}
          {/* <div className={styles.detailText}> */}
            {/* <span className={styles.detailTitle}>Published</span> */}
            {/* <span className={styles.detailValue}> */}
              {/* {post.createdAt.toString().slice(4, 16)} */}
              {/* 01.01.2024 */}
            {/* </span> */}
          {/* </div> */} 
        <div className={styles.content}>
          {post.body}
          {/* Desc */}
        </div>
    </div>
    </div>
    </div>
  );
};

export default SinglePostPage;