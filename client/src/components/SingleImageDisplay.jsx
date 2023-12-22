import { Box } from "@mui/material";
import React from "react";

const SingleImageDisplay = ({ imageData, pokemonName }) => {
  return (
    <Box>
      <img
        src={imageData}
        alt={pokemonName}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default SingleImageDisplay;
