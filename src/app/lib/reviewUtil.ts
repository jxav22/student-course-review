import reviews from "./reviews.json";
import { Review, ReviewSummary } from "./types";

const allReviews: any = reviews;

export function summarizeReviews(reviews: Review[]): ReviewSummary {
  if (reviews.length === 0) {
    return {
      numberOfReviews: 0,
      averageEnjoyment: 0,
      averageQuality: 0,
      averageDifficulty: 0,
      averageOverall: 0,
    };
  }

  // Calculate averages
  const totalEnjoyment = reviews.reduce((acc, curr) => acc + curr.Enjoyment, 0);
  const totalQuality = reviews.reduce((acc, curr) => acc + curr.Quality, 0);
  const totalDifficulty = reviews.reduce(
    (acc, curr) => acc + curr.Difficulty,
    0
  );
  const totalOverall = reviews.reduce((acc, curr) => acc + curr.Overall, 0);

  const numberOfReviews = reviews.length;
  const averageEnjoyment = totalEnjoyment / numberOfReviews;
  const averageQuality = totalQuality / numberOfReviews;
  const averageDifficulty = totalDifficulty / numberOfReviews;
  const averageOverall = totalOverall / numberOfReviews;

  return {
    numberOfReviews,
    averageEnjoyment,
    averageQuality,
    averageDifficulty,
    averageOverall,
  };
}

export function getReviews(code: string): Review[] {
  const courseReviews = allReviews[code];
  return courseReviews == null ? [] : courseReviews;
}
