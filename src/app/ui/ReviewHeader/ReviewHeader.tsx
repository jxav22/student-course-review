import React from "react";
import styles from "./ReviewHeader.module.css";
import Logo from "./Logo/Logo";

type Props = {};

export default function ReviewHeader({}: Props) {
  return (
    <header className={styles.container}>
      <span className={styles.logoPositioner}>
        <Logo />
      </span>
      <span className={styles.headerPositioner}>
        <h2>{"COMPSYS 303"}</h2>
      </span>
    </header>
  );
}
