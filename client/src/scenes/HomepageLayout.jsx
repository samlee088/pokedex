// HomepageLayout.jsx
import React from "react";
import "./HomepageLayout.css";
import { Box, Typography } from "@mui/material";
import EmblaCarousel from "components/EmblaCarousel";

const HomepageLayout = () => {
  return (
    <Box className="mainPageLayout">
      <Typography variant="h1" gutterBottom>
        Pokedex
      </Typography>

      <EmblaCarousel />
    </Box>
  );
};

export default HomepageLayout;
