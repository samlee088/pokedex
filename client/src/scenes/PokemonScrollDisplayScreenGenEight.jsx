import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PokemonScrollDisplayScreenGen.css";
import { Box } from "@mui/material";
import LoadingDisplay from "components/LoadingDisplay";

const PokemonScrollDisplayScreenGenEight = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array = [];

      for (let i = 810; i < 905; i++) {
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
        {pokemonData.length > 0 ? (
          <Box style={{ width: "80%" }}>
            <Slider {...settings}>
              {pokemonData.map((x, index) => (
                <div key={index}>
                  <h1>{x.pokemonName}</h1>
                  <img
                    className="pokemonSpriteDisplay"
                    src={x.pokemonSprite}
                    alt={x.pokemonName}
                  />
                </div>
              ))}
            </Slider>
          </Box>
        ) : (
          <LoadingDisplay />
        )}
      </Box>
    </div>
  );
};

export default PokemonScrollDisplayScreenGenEight;
