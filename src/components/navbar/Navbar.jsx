import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Logo</Link>
      <Links/>
    </div>

  )
};

export default Navbar;