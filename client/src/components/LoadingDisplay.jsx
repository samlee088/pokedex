import React from "react";
import SnorlaxSleeping from "images/snorlaxSleepingGif.gif";
import { Box } from "@mui/material";

const LoadingDisplay = () => {
  return (
    <Box>
      <img
        src={SnorlaxSleeping}
        alt="Loading... Loading..."
        onLoad={() => console.log("Image loaded successfully")}
        onError={() => console.log("Error loading image")}
      />
    </Box>
  );
};

export default LoadingDisplay;
