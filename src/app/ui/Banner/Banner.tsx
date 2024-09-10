import Link from "next/link";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p>
        NEW FEATURE: submit a review <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfp5xLc4TG5dbsjTbkRkNL300ANllshfdIIuMwgH-si4wjStQ/viewform?usp=sf_link">HERE!!!</Link>
      </p>
    </div>
  );
}
