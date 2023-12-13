import React from "react";
import styles from "./RatingSummary.module.css";
import HorizontallyLabelledStarRating from "../HorizontallyLabelledStarRating/HorizontallyLabelledStarRating";
import { ReviewSummary } from "@/app/lib/types";

type Props = { reviewSummary: ReviewSummary };

export default function RatingSummary({ reviewSummary }: Props) {
  return (
    <article className={styles.container}>
      <span>{`${reviewSummary.numberOfReviews} reviews total`}</span>
      <HorizontallyLabelledStarRating
        label={"Enjoyment:"}
        rating={reviewSummary.averageEnjoyment}
      />
      <HorizontallyLabelledStarRating
        label={"Quality:"}
        rating={reviewSummary.averageQuality}
      />
      <HorizontallyLabelledStarRating
        label={"Difficulty:"}
        rating={reviewSummary.averageDifficulty}
      />
      <HorizontallyLabelledStarRating
        label={"Overall:"}
        rating={reviewSummary.averageOverall}
      />
    </article>
  );
}
