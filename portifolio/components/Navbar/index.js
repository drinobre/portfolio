import Link from "next/link";

export function Navbar() {
  return (
    <div className="container-navbar">
      <div className="navbar-right">
        {" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      {/* <div className="navbar-right">
        {" "}
        <Link href="/about">
          <a>About me</a>
        </Link>
      </div> */}
      <div className="navbar-right">
        {" "}
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
      {/* <div className="navbar-right">
        {" "}
        <Link href="/contact">
          <a>Contact me</a>
        </Link>
      </div> */}
    </div>
  );
}
