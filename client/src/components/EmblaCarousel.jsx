import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";
import CharzardImageGif from "components/images/CharzardImageGif";
import CharmanderMarshmellowGif from "components/images/CharmanderMarshemllowGif";
import CharmanderImageGif from "components/images/CharmanderImageGif";
import CharmeleonImage from "components/images/CharmeleonImageGif";
import BulbasaurCuteImageGif from "components/images/BulbasaurCuteImageGif";
import SquirtleEatingImageGif from "components/images/SquirtleEatingImageGif";
import SquirtleGroupImageGif from "components/images/SquirtleGroupImageGif";
import PikachuImageGif from "components/images/PikachuImageGif";
import PikachuWateringPlantImageGif from "components/images/PikachuWateringPlantImageGif";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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

Autoplay.globalOptions = { delay: 2000 };

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const navigate = useNavigate();

  async function PokemonGenerationSelectionRoute(generationSelection) {
    navigate("/pokedexGeneration", {
      state: { generationSelection: generationSelection },
    });
  }

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imageArray.map((x, index) => {
            return (
              <div
                className="boxLink"
                key={index}
                onClick={() => PokemonGenerationSelectionRoute(index + 1)}
              >
                <Box className="outerContainer">
                  <Box className="description">
                    <Typography variant="h2">Gen {index + 1}</Typography>
                  </Box>

                  <Box className="box">
                    <Box className="image">{x}</Box>
                  </Box>
                </Box>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
