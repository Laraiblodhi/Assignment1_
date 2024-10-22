import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link href="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link href="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link href="/Job">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link href="/Job/Programing">Programing</Link>
        </li>
      </ul>
    </nav>
  );
}
