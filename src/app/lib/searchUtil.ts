import courses from "./courses.json";
import Fuse from "fuse.js";

const fuseOptions = {
  keys: ["Code", "Title"],
};

const fuse = new Fuse(courses, fuseOptions);

const processResults = (results: any) =>
  results.map((result: any) => ({
    Code: result.item.Code,
    Title: result.item.Title,
    Stage: result.item.Stage,
  }));

export const search = (term: string) => processResults(fuse.search(term));
