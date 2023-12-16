import { Box } from "@mui/material";
import React from "react";

const SingleImageDisplay = ({ imageData, pokemonName }) => {
  return (
    <Box>
      <img src={imageData} alt={pokemonName} />
    </Box>
  );
};

export default SingleImageDisplay;
