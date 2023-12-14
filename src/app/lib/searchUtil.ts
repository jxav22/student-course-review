import courses from "./courses.json";
import Fuse from "fuse.js";
import { Course } from "./types";

const fuseOptions = {
  threshold: 0.1,
  keys: ["Code", "Title"],
};

const fuse = new Fuse(courses, fuseOptions);

function processResults(results: any): Course[] {
  return results.map((result: any) => ({
    Code: result.item.Code,
    Title: result.item.Title,
    Stage: result.item.Stage,
  }));
}

export function search(term: string): Course[]{
  return processResults(fuse.search(term));
}