import CharzardImage from "components/CharzardImage";
import React from "react";
import "./HomepageLayout.css";
import { Box } from "@mui/material";
import CharzardImageGif from "components/CharzardImageGif";
import CharmanderMarshmellowGif from "components/CharmanderMarshemllowGif";
import CharmanderImageGif from "components/CharmanderImageGif";
import { Link } from "react-router-dom";

import CharmeleonImage from "components/CharmeleonImageGif";

const HomepageLayout = () => {
  return (
    <Box className="mainPageLayout">
      <h1>Pokedex Main Intro Page</h1>
      <CharzardImage />

      <Link to="PokemonScrollDisplayScreenGenOne">
        <Box style={{ display: "inline-block" }}>
          <CharzardImageGif />
        </Box>
      </Link>
      <Link to="PokemonScrollDisplayScreenGenTwo">
        <Box style={{ display: "inline-block" }}>
          <CharmanderMarshmellowGif />
        </Box>
      </Link>
      <Link to="PokemonScrollDisplayScreenGenThree">
        <Box style={{ display: "inline-block" }}>
          <CharmanderImageGif />
        </Box>
      </Link>
      <Link to="PokemonScrollDisplayScreenGenFour">
        <Box style={{ display: "inline-block" }}>
          <CharmeleonImage />
        </Box>
      </Link>
    </Box>
  );
};

export default HomepageLayout;
