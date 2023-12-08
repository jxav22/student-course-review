import React from "react";
import styles from "./Logo.module.css";

type Props = {};

export default function Logo({}: Props) {
  return (
    <section className={styles.logoContainer}>
      <h1>STUDENT</h1>
      <h1>COURSE REVIEW</h1>
      <div className={styles.logoSeperator} />
      <h2>AUCKLAND</h2>
    </section>
  );
}
