import React from "react";
import styles from "./LoadMoreButton.module.css";

type Props = {
  enableCondition: boolean;
  handleOnClick: () => void;
};

export default function LoadMoreButton({
  enableCondition,
  handleOnClick,
}: Props) {
  return (
    <>
      {enableCondition ? (
        <button onClick={handleOnClick} className={styles.loadMoreButton}>
          load more . . .
        </button>
      ) : (
        <div className={styles.bottomPaddingProvider} />
      )}
    </>
  );
}
