import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "./ui/SearchTool/SearchBar/SearchBar";
import SearchResult from "./ui/SearchTool/SearchResult/SearchResult";
import SearchResultsDisplay from "./ui/SearchTool/SearchResultsDisplay/SearchResultsDisplay";
import SearchTool from "./ui/SearchTool/SearchTool";
import MainHeader from "./ui/MainHeader/MainHeader";

export default function Home() {
  return (
    <main>
      <div className={styles.headerContainer}>
        <MainHeader />
      </div>
      <div className={styles.searchToolContainer}>
        <SearchTool />
      </div>
    </main>
  );
}
