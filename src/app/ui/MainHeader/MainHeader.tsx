import React from "react";
import styles from "./MainHeader.module.css";
import { inter } from "@/app/lib/fonts";

type Props = {};

export default function MainHeader({}: Props) {
  return (
    <header className={styles.container}>
      <section className={`${inter.className} ${styles.logoContainer}`}>
        <h1>STUDENT</h1>
        <h1>COURSE REVIEW</h1>
        <div className={styles.logoSeperator} />
        <h2>AUCKLAND</h2>
      </section>
      <div className={styles.headerSeperator} />
    </header>
  );
}
