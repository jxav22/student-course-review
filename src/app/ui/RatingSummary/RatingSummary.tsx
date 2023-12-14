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
        rating={reviewSummary.Enjoyment}
      />
      <HorizontallyLabelledStarRating
        label={"Quality:"}
        
        rating={reviewSummary.Quality}
      />
      <HorizontallyLabelledStarRating
        label={"Difficulty:"}
        rating={reviewSummary.Difficulty}
      />
      <HorizontallyLabelledStarRating
        label={"Overall:"}
        rating={reviewSummary.Overall}
      />
    </article>
  );
}
