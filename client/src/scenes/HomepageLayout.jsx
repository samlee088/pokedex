// HomepageLayout.jsx
import React from "react";
import "./HomepageLayout.css";
import { Box, Typography } from "@mui/material";
import EmblaCarousel from "components/EmblaCarousel";

const HomepageLayout = () => {
  return (
    <Box className="mainPageLayout">
      <EmblaCarousel />
    </Box>
  );
};

export default HomepageLayout;
