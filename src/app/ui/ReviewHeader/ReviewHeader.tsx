import React from "react";
import styles from "./ReviewHeader.module.css";
import Logo from "./Logo/Logo";
import RatingSummary from "../RatingSummary/RatingSummary";
import { ReviewSummary } from "@/app/lib/types";
import Box from "@mui/material/Box";
import { AppBar, Drawer, Toolbar, Typography } from "@mui/material";

type Props = { course: string; reviewSummary: ReviewSummary };

export default function ReviewHeader({ course, reviewSummary }: Props) {
  return (
    <>
      <Box component="div" sx={{ display: { xs: "none", sm: "block" } }}>
        <header className={styles.container}>
          <span className={styles.logoPositioner}>
            <Logo />
          </span>
          <span className={styles.ratingSummaryPositioner}>
            <RatingSummary reviewSummary={reviewSummary} />
          </span>
          <span className={styles.headerPositioner}>
            <h2>{course}</h2>
          </span>
        </header>
      </Box>
      <Box component="div" sx={{ display: { xs: "block", sm: "none" } }}>
        <AppBar component="nav" position="sticky">
          <Toolbar>
            <Typography variant="h6" component="h1" padding="10px" textAlign="center">
              {course}
            </Typography>
          </Toolbar>
        </AppBar>
        <RatingSummary reviewSummary={reviewSummary}/>
      </Box>
    </>
  );
}
