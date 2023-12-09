import CharzardImage from "components/CharzardImage";
import React from "react";
import "./HomepageLayout.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import CharzardImageGif from "components/CharzardImageGif";
import CharmanderMarshmellowGif from "components/CharmanderMarshemllowGif";
import CharmanderImageGif from "components/CharmanderImageGif";
import CharmeleonImage from "components/CharmeleonImageGif";
import BulbasaurCuteImageGif from "components/BulbasaurCuteImageGif";
import SquirtleEatingImageGif from "components/SquirtleEatingImageGif";
import SquirtleGroupImageGif from "components/SquirtleGroupImageGif";
import PikachuImageGif from "components/PikachuImageGif";
import PikachuWateringPlantImageGif from "components/PikachuWateringPlantImageGif";

const HomepageLayout = () => {
  return (
    <Box className="mainPageLayout">
      <h1>Pokedex Main Intro Page</h1>
      <CharzardImage />

      <Box>
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
        <Link to="PokemonScrollDisplayScreenGenFive">
          <Box style={{ display: "inline-block" }}>
            <BulbasaurCuteImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenSix">
          <Box style={{ display: "inline-block" }}>
            <SquirtleEatingImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenSeven">
          <Box style={{ display: "inline-block" }}>
            <SquirtleGroupImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenEight">
          <Box style={{ display: "inline-block" }}>
            <PikachuImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenNine">
          <Box style={{ display: "inline-block" }}>
            <PikachuWateringPlantImageGif />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default HomepageLayout;
