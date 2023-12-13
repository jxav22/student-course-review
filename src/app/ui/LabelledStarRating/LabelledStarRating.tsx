import React from "react";
import styles from "./LabelledStarRating.module.css";
import StarRating from "./StarRating/StarRating";

type Props = { label: string; rating: number };

export default function LabelledStarRating({ label, rating }: Props) {
  return (
    <article className={styles.container}>
      <span className={styles.label}>{label}</span>
      <StarRating rating={rating} />
    </article>
  );
}
