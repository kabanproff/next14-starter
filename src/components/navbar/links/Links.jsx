"use client"
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "../navLink/navLink";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);
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
    <div className={styles.container}>
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
      <button onClick={()=>setOpen(pr => !pr)} className={styles.menuBtn}>Menu</button>
      {
        open && 
        <div className={styles.mobileLinks}> 
          {links.map(link => <NavLink key={link.title} {...link} />)}
        </div>
      }
    </div>
  )
};

export default Links;