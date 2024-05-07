import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Logo</Link>
      <Links/>
    </div>

  )
};

export default Navbar;