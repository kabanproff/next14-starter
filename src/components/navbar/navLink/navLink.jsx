"use client"
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({title, path}) => {
  const pathName = usePathname();

  return (
    <Link className={`${styles.link} ${(pathName === path) && styles.active}`} href={path}>{title}</Link>
  )
};

export default NavLink;