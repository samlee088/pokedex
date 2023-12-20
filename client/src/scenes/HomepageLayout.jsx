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

  return (
    <Box className="mainPageLayout">
      <h1>Pokedex Main Intro Page</h1>
      <CharzardImage />

      <Box className="generationLayOut">
        {imageArray.map((x, index) => {
          console.log(index);
          return (
            <Link
              to={`PokemonScrollDisplayScreenGen${index + 1}`}
              className="boxLink"
              key={index}
            >
              <Box className="box">{x}</Box>
              <Box className="box">
                <h1>Gen {index + 1}</h1>
              </Box>
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default HomepageLayout;
