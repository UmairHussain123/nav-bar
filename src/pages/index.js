import Link from "next/link";
export default function Home() {
  return (
    <div>
      <nav>
        <ul>
            <li>
          <Link href="/">
              Home
          </Link>
            </li>
            <li>
          <Link href="/News">
              News
          </Link>
            </li>
            <li>
          <Link href="/Contact">
              Contact
          </Link>
            </li>
            <li>
          <Link href="/About">
              About
          </Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}
