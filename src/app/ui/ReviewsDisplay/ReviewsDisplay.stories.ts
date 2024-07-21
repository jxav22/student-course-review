import type { Meta, StoryObj } from "@storybook/react";
import ReviewsDisplay from "./ReviewsDisplay";
import {
  generateReview,
  getRandomReview,
} from "@/app/lib/reviewUtil";
import { Review } from "@/app/lib/types";

const meta = {
  title: "ReviewsDisplay",
  component: ReviewsDisplay,
  tags: ["autodocs"],
} satisfies Meta<typeof ReviewsDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

let reviews: Review[] = [];

export const NoReviews: Story = {
  args: {
    reviews,
  },
};

reviews = [getRandomReview()];

export const RandomReview: Story = {
  args: {
    reviews,
  },
};

reviews = [getRandomReview(), getRandomReview(), getRandomReview(), getRandomReview(), getRandomReview()];

export const ManyRandomReviews: Story = {
  args: {
    reviews,
  },
};

export const LongReview: Story = {
  args: {
    reviews: [
      generateReview(5, 5, 5, 5, "A", "2021-01-01", [
        "Great!",
        "Superb!",
        "Excellent!",
        "Fantastic!",
        "Awesome!",
        "Amazing!",
        "Wonderful!",
        "Incredible!",
        "Terrific!",
        "Marvelous!",
        "Fabulous!",
        "Splendid!",
        "Magnificent!",
        "Brilliant!",
        "Stupendous!",
        "Phenomenal!",
        "Astounding!",
        "Stunning!",
        "Breathtaking!",
        "Mind-blowing!",
        "Unbelievable!",
        "Unreal!",
        "Outstanding!",
        "Impressive!",
        "Spectacular!",
        "Remarkable!",
        "Extraordinary!",
        "Exceptional!",
        "Out of this world!",
        "Astonishing!",
        "Jaw-dropping!",
        "Eye-popping!",
        "Mind-boggling!",
        "Mind-bending",
      ]),
    ],
  },
};
