import CharzardImage from "components/CharzardImage";
import React from "react";
import "./HomepageLayout.css";
import { Box } from "@mui/material";
import CharzardImageGif from "components/CharzardImageGif";
import { Link } from "react-router-dom";

const HomepageLayout = () => {
  return (
    <Box className="mainPageLayout">
      <h1>Pokedex Main Intro Page</h1>
      <CharzardImage />

      <Link to="allPokemonScrollDisplay">
        <Box style={{ display: "inline-block" }}>
          <CharzardImageGif />
        </Box>
      </Link>
    </Box>
  );
};

export default HomepageLayout;
