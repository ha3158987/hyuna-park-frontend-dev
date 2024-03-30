import React from "react";
import Link from "next/link";
import styles from "@components/main/header.module.scss";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-grid"]}>
        <div className={styles["name-logo"]}>Hyuna Park</div>
        <div>Seoul, Korea 11:27</div>
        <div className={styles["nav-container"]}>
          <Link href="">WORK</Link>
          <Link href="/about">ABOUT</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
