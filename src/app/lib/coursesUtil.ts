import { Course } from "./types";
import courses from './courses.json';

export function getXCourses(x: number): Course[] {
  return courses.slice(0, x);
}

export function getCourses(): Course[]{
  return courses;
}