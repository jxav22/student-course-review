import courses from "./courses.json";

export function getAllCourses(): any {
  return courses.map((course) => {
    course: course.Code;
  });
}
