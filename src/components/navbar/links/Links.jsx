import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "../navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ]

  // temporary
  const session = true;
  const isAdmin = true
  return (
    <div className={styles.links}>
      {
        links.map(link => <NavLink key={link.title} {...link} />)
      }
      {
        session ? (
          <>
            {
              isAdmin && (<NavLink path={"/admin"} title={"Admin"} />)
            }
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink path={"/login"} title={"Login"} />
        )
      }
      
    </div>

  )
};

export default Links;