import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image 
            className={styles.avatar} 
            src="https://images.pexels.com/photos/22590665/pexels-photo-22590665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
            alt="" 
            width={50} height={50} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              Terry Jefferson
            </span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {/* {post.createdAt.toString().slice(4, 16)} */}
              01.01.2024
            </span>
          </div>
        <div className={styles.content}>
          {/* {post.desc} */}
          Desc
        </div>
    </div>
    </div>
    </div>
  );
};

export default SinglePostPage;