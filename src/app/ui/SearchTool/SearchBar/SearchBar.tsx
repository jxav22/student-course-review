import React, { useEffect, useRef, Dispatch, SetStateAction } from "react";
import styles from "./SearchBar.module.css";

type Props = {
  handleValue: [string, Dispatch<SetStateAction<string>>];
};

function SearchBar({ handleValue }: Props) {
  const [searchTerm, setSearchTerm] = handleValue;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <input
      ref={inputRef}
      className={styles.input}
      value={searchTerm}
      onChange={handleChange}
      placeholder="Enter course code"
    />
  );
}

export default SearchBar;
