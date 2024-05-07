import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {/* {post.img && <div className={styles.imgContainer}> */}
        {<div className={styles.imgContainer}>
          {/* <Image src={post.img} alt="" fill className={styles.img}/> */}
          <Image src="https://images.pexels.com/photos/22590665/pexels-photo-22590665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
 alt="" fill className={styles.img}/>
        </div>}
        {/* <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span> */}
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard;