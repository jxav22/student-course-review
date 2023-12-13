import React from "react";
import styles from "./HorizontallyLabelledStarRating.module.css";
import StarRating from "../LabelledStarRating/StarRating/StarRating";

type Props = { label: string; rating: number };

export default function HorizontallyLabelledStarRating({
  label,
  rating,
}: Props) {
  return (
    <article className={styles.container}>
      <span className={styles.label}>{label}</span>
      <StarRating rating={rating} />
    </article>
  );
}
