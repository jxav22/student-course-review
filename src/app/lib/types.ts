export type Review = {
  Enjoyment: number;
  Quality: number;
  Difficulty: number;
  Overall: number;
  Grade: string;
  Date: string;
  Content: string[];
};

export type ReviewSummary = {
  numberOfReviews: number;
  Enjoyment: number;
  Quality: number;
  Difficulty: number;
  Overall: number;
};

export type Course = {
  Code: string;
  Title: string;
  Stage: string;
};
