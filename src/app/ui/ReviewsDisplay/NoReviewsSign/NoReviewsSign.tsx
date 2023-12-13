import React from 'react'
import styles from './NoReviewsSign.module.css'

type Props = {}

export default function NoReviewsSign({}: Props) {
  return (
    <p className={styles.noReviewsSign}>{"No Reviews"}</p>
  )
}