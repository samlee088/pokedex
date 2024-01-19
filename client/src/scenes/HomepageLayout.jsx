// HomepageLayout.jsx
import React from "react";
import "./HomepageLayout.css";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CharzardImage from "components/images/CharzardImage";
import EmblaCarousel from "components/EmblaCarousel";

const HomepageLayout = () => {
  const navigate = useNavigate();

  return (
    <Box className="mainPageLayout">
      <Typography variant="h1" gutterBottom>
        Pokedex
      </Typography>
      <CharzardImage />
      <EmblaCarousel />
    </Box>
  );
};

export default HomepageLayout;
