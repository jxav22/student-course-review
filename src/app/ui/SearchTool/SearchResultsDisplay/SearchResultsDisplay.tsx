import React from 'react'
import styles from './SearchResultsDisplay.module.css'
import SearchResult from '../SearchResult/SearchResult';
import { inter } from '@/app/lib/fonts';
import { FuseResult } from 'fuse.js';

type Props = {
    searchResults: Array<{ Code: string, Title: string, Stage: string }>;
}

function SearchResultsDisplay({searchResults}: Props) {
  const numberOfResults = searchResults.length;

  const getInfoText = () => {
    if (numberOfResults < 1){
        return "";
    } else if (numberOfResults === 1){
        return "1 course found";
    } else {
        return `${numberOfResults} courses found`;
    }
  }

  return (
    <section className={styles.container}>
        <span className={`${inter.className} ${styles.infoText}`}>{getInfoText()}</span>
        {searchResults.map((searchResult, index) => (
            <SearchResult key={index} courseCode={searchResult.Code} courseTitle={searchResult.Title}/>
        ))}
    </section>
  )
}

export default SearchResultsDisplay