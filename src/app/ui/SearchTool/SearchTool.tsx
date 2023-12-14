"use client";

import { useState, useMemo, useEffect } from "react";
import SearchBar from "./SearchBar/SearchBar";
import SearchResultsDisplay from "./SearchResultsDisplay/SearchResultsDisplay";
import styles from "./SearchTool.module.css";
import { search } from "@/app/lib/searchUtil";
import { useDebounce } from "use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {};

function handleUndefinedString(undefinedString: any) {
  if (typeof undefinedString == "string") {
    return undefinedString;
  } else {
    return "";
  }
}

export default function SearchTool() {
  // const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState(
    "" // handleUndefinedString(searchParams.get("query")?.toString())
  );
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);

  const searchResults = useMemo(() => {
    return search(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  // const updateSearchParams = (newSearchTerm: string) => {
  //   if (newSearchTerm == debouncedSearchTerm) {
  //     return null;
  //   }

  //   const params = new URLSearchParams(searchParams);
  //   if (newSearchTerm == "") {
  //     params.delete("query");
  //   } else {
  //     params.set("query", newSearchTerm);
  //   }
  //   replace(`${pathname}?${params.toString()}`);
  // };

  // useEffect(() => {
  //   const oldSearchTerm = searchParams.get("query")?.toString();
  //   if (oldSearchTerm != debouncedSearchTerm) {
  //     const params = new URLSearchParams(searchParams);
  //     if (debouncedSearchTerm == "") {
  //       params.delete("query");
  //     } else {
  //       params.set("query", debouncedSearchTerm);
  //     }
  //     replace(`${pathname}?${params.toString()}`);
  //   }
  // }, [debouncedSearchTerm, searchParams]);

  return (
    <section className={styles.container}>
      <SearchBar handleValue={[searchTerm, setSearchTerm]} />
      <SearchResultsDisplay searchResults={searchResults} />
    </section>
  );
}
