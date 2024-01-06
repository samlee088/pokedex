import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "utils/axios";

const PokemonTriviaDisplay = ({ source }) => {
  return (
    <Box
      sx={{
        maxHeight: "300px", // Set the maximum height as per your requirement
        overflowY: "auto",
        backgroundColor: "#f0f0f0",
      }}
    >
      {source.map((x, index) => {
        return <p key={index}>{x}</p>;
      })}
    </Box>
  );
};

export default PokemonTriviaDisplay;
