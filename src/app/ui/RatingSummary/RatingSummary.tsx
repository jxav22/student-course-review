import React from "react";
import styles from "./RatingSummary.module.css";
import HorizontallyLabelledStarRating from "../HorizontallyLabelledStarRating/HorizontallyLabelledStarRating";

type Props = {};

export default function RatingSummary({}: Props) {
  return (
    <article className={styles.container}>
      <span>{"3 reviews total"}</span>
      <HorizontallyLabelledStarRating label={"Enjoyment:"} rating={1} />
      <HorizontallyLabelledStarRating label={"Quality:"} rating={1} />
      <HorizontallyLabelledStarRating label={"Difficulty:"} rating={1} />
      <HorizontallyLabelledStarRating label={"Overall:"} rating={1} />
    </article>
  );
}
