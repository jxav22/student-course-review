import React, { useState } from "react";
import styles from "./SearchResultsDisplay.module.css";
import SearchResult from "../SearchResult/SearchResult";
import { inter } from "@/app/lib/fonts";
import { FuseResult } from "fuse.js";

type Props = {
  searchResults: Array<{ Code: string; Title: string; Stage: string }>;
};

function SearchResultsDisplay({ searchResults }: Props) {
  const [amountToDisplay, setAmountToDisplay] = useState(10);
  const numberOfResults = searchResults.length;
  const resultsToDisplay = searchResults.slice(0, amountToDisplay);

  const getInfoText = () => {
    if (numberOfResults < 1) {
      return "";
    } else if (numberOfResults === 1) {
      return "1 course found";
    } else {
      return `${numberOfResults} courses found`;
    }
  };

  return (
    <section className={styles.container}>
      <span className={`${inter.className} ${styles.infoText}`}>
        {getInfoText()}
      </span>
      {resultsToDisplay.map((searchResult, index) => (
        <SearchResult
          key={index}
          courseCode={searchResult.Code}
          courseTitle={searchResult.Title}
        />
      ))}
      {resultsToDisplay.length < numberOfResults && (
        <button
          onClick={() => {
            setAmountToDisplay(amountToDisplay + 10);
          }}
          className={styles.loadMoreButton}
        >
          load more . . .
        </button>
      )}
    </section>
  );
}

export default SearchResultsDisplay;
