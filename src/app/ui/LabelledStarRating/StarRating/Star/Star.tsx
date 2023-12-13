import React from "react";
import styles from "./Star.module.css";

type Props = {
  isActive: boolean;
};

export default function Star({ isActive }: Props) {
  return (
    <svg
      className={`${styles.star} ${
        isActive ? styles.isActive : styles.isInactive
      }`}
      viewBox="0 0 50 50"
    >
      <path d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
    </svg>
  );
}
