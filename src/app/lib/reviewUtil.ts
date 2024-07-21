import reviews from "./reviews.json";
import { Review, ReviewSummary } from "./types";

export function generateReview(
  Enjoyment: number,
  Quality: number,
  Difficulty: number,
  Overall: number,
  Grade: string,
  Date: string,
  Content: string[]
): Review {
  return { Enjoyment, Quality, Difficulty, Overall, Grade, Date, Content };
}

function generateReviewSummary(
  numberOfReviews: number,
  Enjoyment: number,
  Quality: number,
  Difficulty: number,
  Overall: number
): ReviewSummary {
  return {
    numberOfReviews,
    Enjoyment,
    Quality,
    Difficulty,
    Overall,
  };
}

export function generateEmptySummary(): ReviewSummary {
  return generateReviewSummary(0, 0, 0, 0, 0);
}

function sumReviews(reviews: Review[]): ReviewSummary {
  const totalEnjoyment = reviews.reduce((acc, curr) => acc + curr.Enjoyment, 0);
  const totalQuality = reviews.reduce((acc, curr) => acc + curr.Quality, 0);
  const totalDifficulty = reviews.reduce(
    (acc, curr) => acc + curr.Difficulty,
    0
  );
  const totalOverall = reviews.reduce((acc, curr) => acc + curr.Overall, 0);

  return generateReviewSummary(
    reviews.length,
    totalEnjoyment,
    totalQuality,
    totalDifficulty,
    totalOverall
  );
}

function averageReviews(reviews: Review[]): ReviewSummary {
  const totalReviews = sumReviews(reviews);

  const numberOfReviews = totalReviews.numberOfReviews;
  const averageEnjoyment = totalReviews.Enjoyment / numberOfReviews;
  const averageQuality = totalReviews.Quality / numberOfReviews;
  const averageDifficulty = totalReviews.Difficulty / numberOfReviews;
  const averageOverall = totalReviews.Overall / numberOfReviews;

  return generateReviewSummary(
    numberOfReviews,
    averageEnjoyment,
    averageQuality,
    averageDifficulty,
    averageOverall
  );
}

export function summarizeReviews(reviews: Review[]): ReviewSummary {
  if (reviews.length === 0) {
    return generateEmptySummary();
  }

  return averageReviews(reviews);
}

export async function getReviews(code: string): Promise<Review[]> {
  const courseReviews = (
    reviews as {
      [key: string]: Review[];
    }
  )[code];
  return courseReviews == null ? [] : courseReviews;
}