import styles from "./page.module.css";
import ReviewHeader from "../../ui/ReviewHeader/ReviewHeader";
import ReviewsDisplay from "../../ui/ReviewsDisplay/ReviewsDisplay";
import { Course } from "../../lib/types";
import { getReviews, summarizeReviews } from "../../lib/reviewUtil";
import { getCourses } from "@/app/lib/coursesUtil";
import { search } from "@/app/lib/searchUtil";

function encodeCourses(courses: Course[]): { course: string }[] {
  return courses.map((course: any) => ({
    course: course.Code, // Return an object with the 'course' key
  }));
}

function decodeCourse(course: string): string {
  return decodeURIComponent(course);
}

export async function generateStaticParams() {
  // const courses = search("electeng");
  const courses = getCourses();
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
