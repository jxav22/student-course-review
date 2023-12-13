import React from "react";
import styles from "./Review.module.css";
import LabelledStarRating from "../LabelledStarRating/LabelledStarRating";

type Props = {};

export default function Review({}: Props) {
  return (
    <section className={styles.container}>
      <section className={styles.header}>
        <LabelledStarRating label={"Enjoyment"} rating={1} />
        <LabelledStarRating label={"Quality"} rating={1} />
        <LabelledStarRating label={"Difficulty"} rating={1} />
        <LabelledStarRating label={"Overall"} rating={1} />
        <span>{"N/A"}</span>
        <span>{"7/12/23"}</span>
      </section>
      <section className={styles.content}>{"This was total ass"}</section>
    </section>
  );
}
