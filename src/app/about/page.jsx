import Image from "next/image";
import styles from "./about.module.css";
const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgBox}>
        {/* <Image src='/about.png' alt={'about'}  width={500} height={500}/> */}
        {/* <Image src='/about.png' alt={'about'} fill/> */}
        <Image src='https://images.pexels.com/photos/22590665/pexels-photo-22590665.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt={'about'} fill/>
      </div>
    </div>
  );
};

export default AboutPage;