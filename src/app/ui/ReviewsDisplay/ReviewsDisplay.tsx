import React from 'react'
import Review from './Review/Review';
import NoReviewsSign from './NoReviewsSign/NoReviewsSign';
import { Review as ReviewType } from '@/app/lib/types';
import styles from './ReviewsDisplay.module.css'

type Props = {
    reviews: ReviewType[]
}

export default function ReviewsDisplay({reviews}: Props) {
  const isNoReviews = reviews.length == 0;

  return (
    <section className={styles.container}>
        {isNoReviews ? (<NoReviewsSign/>) : 
        reviews.map((review, index) => (
            <Review key={index} review={review}/>
        ))}
    </section>
  )
}