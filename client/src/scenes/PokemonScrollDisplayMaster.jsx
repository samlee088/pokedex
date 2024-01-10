import React, { useEffect, useMemo, useState } from "react";
import axios from "utils/axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PokemonScrollDisplayScreenGen.css";
import { Box } from "@mui/material";
import LoadingDisplay from "components/LoadingDisplay";
import PokedexImageClick from "components/PokedexImageClick";
import PokemonTriviaDisplay from "components/PokemonTriviaDisplay";
import { useLocation } from "react-router-dom";

const PokemonScrollDisplayMaster = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const location = useLocation();

  const generationData = [
    [1, 151],
    [152, 251],
    [252, 386],
    [387, 493],
    [494, 649],
    [650, 721],
    [722, 809],
    [810, 905],
    [906, 1010],
  ];

  useEffect(() => {
    async function fetchData() {
      let array = [];

      let selection = location.state.generationSelection - 1;
      let start = generationData[selection][0];
      let end = generationData[selection][1];

      const requests = [];
      for (let i = start; i <= end; i++) {
        requests.push(axios.get(`/pokemon/${i}`));
      }

      const responses = await Promise.all(requests);
      array = await Promise.all(
        responses.map(async (response) => {
          const pokemon = response.data;
          const pokemonNumber = pokemon.id;

          // Second API call for species information
          const speciesResponse = await axios.get(`/pokemon-species/${pokemonNumber}`);
          let speciesRequestTrivia = [];
          speciesResponse.data.flavor_text_entries.forEach((x) => {
            if (x.language.name === "en") {
              speciesRequestTrivia = [...speciesRequestTrivia, x.flavor_text];
            }
          });

          let dupRemove = new Set(speciesRequestTrivia);
          const final = [...dupRemove];

          return {
            pokemonName: pokemon.name,
            pokemonSprite: pokemon.sprites.front_default,
            pokemonNumber: `${pokemonNumber}`,
            pokemonTrivia: final,
          };
        })
      );

      setPokemonData(array);
    }

    fetchData();
  }, [location.state.generationSelection]);

  const memoizedPokemonData = useMemo(() => pokemonData, [pokemonData]);

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
        {memoizedPokemonData.length > 0 ? (
          <Box style={{ width: "80%" }}>
            <Slider {...settings}>
              {memoizedPokemonData.map((x, index) => (
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

export default PokemonScrollDisplayMaster;