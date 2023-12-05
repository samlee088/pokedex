import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PokemonScrollDisplayScreen.css";
import { Box } from "@mui/material";

const PokemonScrollDisplayScreen = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array = [];

      for (let i = 1; i < 151; i++) {
        const request = await axios.get(`/pokemon/${i}`);
        array.push({
          pokemonName: request.data.name,
          pokemonSprite: request.data.sprites.front_default,
        });
      }
      setPokemonData(array);
    }

    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box
        style={{
          backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "10px",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <ul style={{ margin: "5px" }}> {dots} </ul>
        </Box>
      </Box>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div className="pageLayout">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box style={{ width: "70%" }}>
          <Slider {...settings}>
            {pokemonData.map((x, index) => (
              <div key={index}>
                <h1>{x.pokemonName}</h1>
                <img src={x.pokemonSprite} />
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </div>
  );
};

export default PokemonScrollDisplayScreen;
