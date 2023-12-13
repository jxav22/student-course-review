import React from "react";
import styles from "./StarRating.module.css";
import Star from "./Star/Star";

type Props = { rating: number };

export default function StarRating({ rating }: Props) {
  let items: any = [];

  for (let i = 1; i < 6; i++) {
    let isActive = false;
    if (i <= rating) {
      isActive = true;
    }
    items.push(<Star key={i} isActive={isActive} />);
  }

  return <article className={styles.container}>{items}</article>;
}
