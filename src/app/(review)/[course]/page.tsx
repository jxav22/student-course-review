import styles from "./page.module.css";
import ReviewHeader from "../../ui/ReviewHeader/ReviewHeader";
import ReviewsDisplay from "../../ui/ReviewsDisplay/ReviewsDisplay";
import { Review, ReviewSummary, Course } from "../../lib/types";
import { getReviews, summarizeReviews } from "../../lib/reviewUtil";
import { getCourses, getXCourses } from "@/app/lib/coursesUtil";
import { useEffect, useState } from "react";
import { Corben } from "next/font/google";
import { search } from "@/app/lib/searchUtil";

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

function encodeCourses(courses: Course[]): { course: string }[] {
  return courses.map((course: any) => ({
    course: course.Code, // Return an object with the 'course' key
  }));
}

function decodeCourse(course: string): string {
  return decodeURIComponent(course);
}

export async function generateStaticParams() {
  const courses = search("electeng");
  // const courses = getCourses();
  return encodeCourses(courses);
}

export default async function Home({ params }: { params: { course: string } }) {
  const course = decodeCourse(params.course);
  const reviews = await getReviews(course);
  const reviewSummary = summarizeReviews(reviews);

  return (
    <main className={styles.container}>
      <ReviewHeader course={course} reviewSummary={reviewSummary} />
      <ReviewsDisplay reviews={reviews} />
    </main>
  );
}
