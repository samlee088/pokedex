import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./EmblaCarousel.css";
import CharzardImageGif from "components/imagesComponents/CharzardImageGif";
import CharmanderMarshmellowGif from "components/imagesComponents/CharmanderMarshemllowGif";
import CharmanderImageGif from "components/imagesComponents/CharmanderImageGif";
import CharmeleonImage from "components/imagesComponents/CharmeleonImageGif";
import BulbasaurCuteImageGif from "components/imagesComponents/BulbasaurCuteImageGif";
import SquirtleEatingImageGif from "components/imagesComponents/SquirtleEatingImageGif";
import SquirtleGroupImageGif from "components/imagesComponents/SquirtleGroupImageGif";
import PikachuImageGif from "components/imagesComponents/PikachuImageGif";
import PikachuWateringPlantImageGif from "components/imagesComponents/PikachuWateringPlantImageGif";
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
