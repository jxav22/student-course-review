import React from "react";
import styles from "./StarRating.module.css";
import Star from "./Star/Star";

type Props = {};

export default function StarRating({}: Props) {
  return <>
    <Star isActive={true}/>
    <Star isActive={false}/>
    <Star isActive={true}/>
    <Star isActive={false}/>
    <Star isActive={true}/>
  </>
}
