// HomepageLayout.jsx
import React from "react";
import "./HomepageLayout.css";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CharzardImage from "components/CharzardImage";
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
  let imageArray = [
    <CharzardImageGif />,
    <CharmanderMarshmellowGif />,
    <CharmanderImageGif />,
    <CharmeleonImage />,
    <BulbasaurCuteImageGif />,
    <SquirtleEatingImageGif />,
    <SquirtleGroupImageGif />,
    <PikachuImageGif />,
    <PikachuWateringPlantImageGif />,
  ];

  let numberToText = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  return (
    <Box className="mainPageLayout">
      <Typography variant="h1" gutterBottom>
        Pokedex Main Intro Page
      </Typography>
      <CharzardImage />

      <Box className="generationLayOut">
        {imageArray.map((x, index) => {
          const textFormat = numberToText[index];
          return (
            <Link
              to={`PokemonScrollDisplayScreenGen${textFormat}`}
              className="boxLink"
              key={index}
            >
              <Box className='outerContainer'>
                <Box className="description">
                  <Typography variant="h2">Gen {index + 1}</Typography>
                </Box>

                <Box className="box">
                  <Box className="image">{x}</Box>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomepageLayout;
