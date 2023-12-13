import Image from "next/image";
import styles from "./page.module.css";
import Logo from "../ui/ReviewHeader/Logo/Logo";
import ReviewHeader from "../ui/ReviewHeader/ReviewHeader";
import LabelledStarRating from "../ui/LabelledStarRating/LabelledStarRating";
import Review from "../ui/Review/Review";
import RatingSummary from "../ui/RatingSummary/RatingSummary";

export default function Home() {
  return (
    <main>
      <RatingSummary />
      {/* <ReviewHeader/>
        <Review/> */}
    </main>
  );
}
