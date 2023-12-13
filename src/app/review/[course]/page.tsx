import styles from "./page.module.css";
import ReviewHeader from "../../ui/ReviewHeader/ReviewHeader";
import ReviewsDisplay from "../../ui/ReviewsDisplay/ReviewsDisplay";
import { Review, ReviewSummary } from "../../lib/types";
import { getReviews, summarizeReviews } from "../../lib/reviewUtil";
import { getAllCourses } from "@/app/lib/coursesUtil";

// const generateReview = (
//   Enjoyment: number,
//   Quality: number,
//   Difficulty: number,
//   Overall: number,
//   Grade: string,
//   Date: string,
//   Content: string
// ) => {
//   return { Enjoyment, Quality, Difficulty, Overall, Grade, Date, Content };
// };

// const reviews = [
//   generateReview(1, 1, 1, 1, "A", "today", "this sucks"),
//   generateReview(5, 5, 5, 5, "C+", "today", "this is incredible"),
//   generateReview(
//     3,
//     3,
//     3,
//     3,
//     "B-",
//     "today",
//     "this sucked - but it was incredible"
//   ),
// ];

// const reviewSummary = summarizeReviews(reviews);

export default function Home({ params }: { params: { course: string } }) {
  const course = decodeURIComponent(params.course);
  const reviews = getReviews(course);
  const reviewSummary = summarizeReviews(reviews);

  return (
    <main className={styles.container}>
      <ReviewHeader course={course} reviewSummary={reviewSummary} />
      <ReviewsDisplay reviews={reviews} />
    </main>
  );
}

export async function generateStaticParams() {
  return getAllCourses();
}
