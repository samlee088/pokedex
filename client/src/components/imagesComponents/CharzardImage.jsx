import React from "react";
import charzardImage from "images/charzardImage.png";
import { Box } from "@mui/material";

const CharzardImage = () => {
  return (
    <Box>
      <img src={charzardImage} alt="CharzardImage" width="70" height="70" />
    </Box>
  );
};

export default CharzardImage;
