import React from "react";
import styles from "./ReviewHeader.module.css";
import Logo from "./Logo/Logo";
import RatingSummary from "../RatingSummary/RatingSummary";
import { ReviewSummary } from "@/app/lib/types";

type Props = { course: string; reviewSummary: ReviewSummary };

export default function ReviewHeader({ course, reviewSummary }: Props) {
  return (
    <header className={styles.container}>
      <span className={styles.logoPositioner}>
        <Logo />
      </span>
      <span className={styles.ratingSummaryPositioner}>
        <RatingSummary reviewSummary={reviewSummary} />
      </span>
      <span className={styles.headerPositioner}>
        <h2>{course}</h2>
      </span>
    </header>
  );
}
