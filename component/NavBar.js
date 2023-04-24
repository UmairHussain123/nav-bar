import React from 'react'
import Link from "next/link";
import styles from "../src/styles/NavBar.module.css"
function NavBar() {
  return (
    <div className={styles.mainDiv}>
        <nav className={styles.nav}>
    <ul className={styles.bullets}>
        <li>
      <Link href="/" className={styles.link} >
          Home
      </Link>
        </li>
        <li>
      <Link href="/News" className={styles.link}>
          News
      </Link>
        </li>
        <li>
      <Link href="/Contact" className={styles.link}>
          Contact
      </Link>
        </li>
        <li>
      <Link href="/About" className={styles.link}>
          About
      </Link>
        </li>
    </ul>
  </nav></div>
  )
}

export default NavBar