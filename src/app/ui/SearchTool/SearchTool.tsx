"use client";

import React, { useState, useMemo } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchResultsDisplay from "./SearchResultsDisplay/SearchResultsDisplay";
import styles from "./SearchTool.module.css";
import { search } from "@/app/lib/searchUtil";
import { useDebounce } from "use-debounce";

type Props = {};

export default function SearchTool() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 200);
  const searchResults = useMemo(()=>search(debouncedSearchTerm), [debouncedSearchTerm]);

  return (
    <section className={styles.container}>
      <SearchBar handleValue={[searchTerm, setSearchTerm]} />
      <SearchResultsDisplay
        searchResults={searchResults}
      />
    </section>
  );
}
