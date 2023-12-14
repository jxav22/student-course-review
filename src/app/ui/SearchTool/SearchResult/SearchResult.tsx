import React from "react";
import styles from "./SearchResult.module.css";
import { inter } from "@/app/lib/fonts";
import Link from "next/link";

type Props = { courseCode: string; courseTitle: string };

function SearchResult({ courseCode, courseTitle }: Props) {
  return (
    <Link
      href={`/${courseCode}`}
      prefetch={false}
      className={`${styles.container} ${inter.className}`}
    >
      <div className={styles.banner} />
      <div className={styles.text}>
        <span>{`${courseCode}${courseTitle ? " : " : ""}`}</span>
        {courseTitle}
      </div>
    </Link>
  );
}

export default SearchResult;
