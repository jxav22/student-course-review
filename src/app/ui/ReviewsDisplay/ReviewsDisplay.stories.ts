import type { Meta, StoryObj } from "@storybook/react";
import ReviewsDisplay from "./ReviewsDisplay";
import { generateReview } from "@/app/lib/reviewUtil";

const meta = {
  title: "ReviewsDisplay",
  component: ReviewsDisplay,
  tags: ["autodocs"],
} satisfies Meta<typeof ReviewsDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoReviews: Story = {
  args: {
    reviews: [],
  },
};

export const OneReview: Story = {
  args: {
    reviews: [generateReview(5, 5, 5, 5, "A", "2021-01-01", ["Great!"])],
  },
};

export const ManyReviews: Story = {
  args: {
    reviews: [
      generateReview(5, 5, 5, 5, "A", "2021-01-01", ["Great!"]),
      generateReview(1, 1, 1, 1, "F", "2021-01-02", ["Bad!"]),
      generateReview(3, 3, 3, 3, "C", "2021-01-03", ["Okay!"]),
    ],
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

export const VariableLengthReviews: Story = {
  args: {
    reviews: [
      generateReview(5, 5, 5, 5, "A", "2021-01-01", ["Great!"]),
      generateReview(1, 1, 1, 1, "F", "2021-01-02", [
        "Bad!",
        "Terrible!",
        "Awful!",
        "Horrible!",
        "Atrocious!",
        "Bad!",
        "Terrible!",
        "Awful!",
        "Horrible!",
        "Atrocious!",
        "Bad!",
        "Terrible!",
        "Awful!",
        "Horrible!",
        "Atrocious!",
        "Bad!",
        "Terrible!",
        "Awful!",
        "Horrible!",
        "Atrocious!",
      ]),
      generateReview(3, 3, 3, 3, "C", "2021-01-03", [
        "Okay!",
        "Buddy!",
        "Retard!",
      ]),
      generateReview(1, 1, 1, 1, "F", "2024-01-03", ["Love this!"]),
    ],
  },
};
