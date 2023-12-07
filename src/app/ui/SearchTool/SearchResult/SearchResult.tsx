import React from "react";
import styles from "./SearchResult.module.css";
import { inter } from "@/app/lib/fonts";

type Props = { courseCode: string; courseTitle: string };

function SearchResult({ courseCode, courseTitle }: Props) {
  return (
    <article className={`${styles.container} ${inter.className}`}>
      <div className={styles.banner} />
      <div className={styles.text}>
        <span>{`${courseCode}${courseTitle ? " : " : ""}`}</span>
        {courseTitle}
      </div>
    </article>
  );
}

export default SearchResult;
