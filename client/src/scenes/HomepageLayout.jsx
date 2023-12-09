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

      <Box class="generationLayOut">
        <Link to="PokemonScrollDisplayScreenGenOne" className="boxLink">
          <Box className="box">
            <CharzardImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenTwo" className="boxLink">
          <Box className="box">
            <CharmanderMarshmellowGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenThree" className="boxLink">
          <Box className="box">
            <CharmanderImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenFour" className="boxLink">
          <Box className="box">
            <CharmeleonImage />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenFive" className="boxLink">
          <Box className="box">
            <BulbasaurCuteImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenSix" className="boxLink">
          <Box className="box">
            <SquirtleEatingImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenSeven" className="boxLink">
          <Box className="box">
            <SquirtleGroupImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenEight" className="boxLink">
          <Box className="box">
            <PikachuImageGif />
          </Box>
        </Link>
        <Link to="PokemonScrollDisplayScreenGenNine" className="boxLink">
          <Box className="box">
            <PikachuWateringPlantImageGif />
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default HomepageLayout;
