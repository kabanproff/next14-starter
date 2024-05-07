import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div>NotFound</div>
      <p>Sorry, the page you are loking is NotFound</p>
      <Link href="/">Return</Link>
    </div>
  )
};

export default NotFound;