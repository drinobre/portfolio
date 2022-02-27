import Link from "next/link";

export function Navbar() {
  return (
    <div className="container-navbar">
      <div className="navbar-right">
        {" "}
        <Link href="/">
          <a id="navbar-name">Home</a>
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
          <a id="navbar-name">Projects</a>
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
