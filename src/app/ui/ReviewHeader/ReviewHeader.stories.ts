import type { Meta, StoryObj } from "@storybook/react";
import ReviewHeader from "./ReviewHeader";
import { generateEmptySummary } from "@/app/lib/reviewUtil";

const meta = {
  title: "ReviewHeader",
  component: ReviewHeader,
  tags: ["autodocs"],
} satisfies Meta<typeof ReviewHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const reviewSummary = generateEmptySummary();

export const Mobile: Story = {
  args: {
    course: "EXAMPLE 101",
    reviewSummary,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const Tablet: Story = {
  args: {
    course: "EXAMPLE 101",
    reviewSummary,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const Desktop: Story = {
  args: {
    course: "EXAMPLE 101",
    reviewSummary,
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
