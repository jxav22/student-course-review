import React from "react";
import styles from "./Review.module.css";
import LabelledStarRating from "../../LabelledStarRating/LabelledStarRating";
import type { Review as ReviewType } from "@/app/lib/types";

type Props = { review: ReviewType };

export default function Review({ review }: Props) {
  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <span>{review.Date}</span>
        <span>{review.Grade}</span>
        <LabelledStarRating label={"Overall"} rating={review.Overall} />
        <LabelledStarRating label={"Enjoyment"} rating={review.Enjoyment} />
        <LabelledStarRating label={"Quality"} rating={review.Quality} />
        <LabelledStarRating label={"Difficulty"} rating={review.Difficulty} />
      </section>
      <section className={styles.content}>
        {review.Content.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </section>
    </section>
  );
}
