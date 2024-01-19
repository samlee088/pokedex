import React from "react";
import charzardImage from "images/charzardImage.png";
import { Box } from "@mui/material";
import { useState } from "react";
import "./CharzardImage.css";

const CharzardImage = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => setIsClicked(false), 250);
  };

  return (
    <Box>
      <div
        className={`image-container ${isClicked ? "clicked" : ""}`}
        onClick={handleClick}
      >
        <img
          src={charzardImage}
          alt="CharzardImage"
          width="70"
          height="70"
          className={`image ${isClicked ? "clicked" : ""}`}
        />
      </div>
    </Box>
  );
};

export default CharzardImage;
