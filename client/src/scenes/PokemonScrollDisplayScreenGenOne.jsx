import React, { useEffect, useState } from "react";
import axios from "utils/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PokemonScrollDisplayScreenGen.css";
import { Box } from "@mui/material";
import LoadingDisplay from "components/LoadingDisplay";
import PokedexImageClick from "components/PokedexImageClick";
import SingleImageDisplay from "components/SingleImageDisplay";
import PokemonTriviaDisplay from "components/PokemonTriviaDisplay";

const PokemonScrollDisplayScreenGenOne = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array = [];

      for (let i = 1; i < 151; i++) {
        const request = await axios.get(`/pokemon/${i}`);
        const speciesRequest = await axios.get(`/pokemon-species/${i}`);
        let speciesRequestTrivia = [];
        let final = [];
        speciesRequest.data.flavor_text_entries.forEach((x) => {
          if (x.language.name === "en") {
            speciesRequestTrivia = [...speciesRequestTrivia, x.flavor_text];
          }

          let dupRemove = new Set(speciesRequestTrivia);
          final = [...dupRemove];
        });

        array.push({
          pokemonName: request.data.name,
          pokemonSprite: request.data.sprites.front_default,
          pokemonNumber: `${i}`,
          pokemonTrivia: final,
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
                  <PokedexImageClick pokemonData={x} />

                  <PokemonTriviaDisplay source={x.pokemonTrivia} />
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

export default PokemonScrollDisplayScreenGenOne;
