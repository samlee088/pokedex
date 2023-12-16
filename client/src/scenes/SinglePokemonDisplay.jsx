import React, { useEffect, useState } from "react";
import "./SinglePokemonDisplay.css";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "utils/axios";
import SingleImageDisplay from "components/SingleImageDisplay";
import PokemonTriviaDisplay from "components/PokemonTriviaDisplay";

const SinglePokemonDisplay = () => {
  const location = useLocation();
  const [pokemonSelectedInformation, setPokemonSelectedInformation] =
    useState("");

  useEffect(() => {
    console.log(location);
  }, []);

  useEffect(() => {
    async function singlePokemon(pokemonSelection) {
      const request = await axios.get(`/pokemon/${pokemonSelection}`);
      setPokemonSelectedInformation(request.data);

      return request;
    }
    singlePokemon(location.state.pokemonSelection);
  }, [location.state.pokemonSelection]);
  return (
    <Box>
      <h1>{pokemonSelectedInformation.name}</h1>
      <h2>{pokemonSelectedInformation.weight}</h2>
      {pokemonSelectedInformation != "" && (
        <>
          <SingleImageDisplay
            imageData={pokemonSelectedInformation.sprites.front_default}
            pokemonName={pokemonSelectedInformation.name}
          />
          <PokemonTriviaDisplay source={location.state.pokemonSelection} />
        </>
      )}
    </Box>
  );
};

export default SinglePokemonDisplay;
