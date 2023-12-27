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

      console.log(request.data);

      return request;
    }
    singlePokemon(location.state.pokemonSelection);
  }, [location.state.pokemonSelection]);
  return (
    <Box className="singlePokemonOuterContainer">
      <Box className="singlePokemonInnerContainer">
        <h1>{pokemonSelectedInformation.name}</h1>
        <h2>Weight: {pokemonSelectedInformation.weight}</h2>
        <h2>Pokemon ID:{pokemonSelectedInformation.id}</h2>

        {pokemonSelectedInformation != "" && (
          <>
            <Box className="pokemonImageDisplay">
              <SingleImageDisplay
                imageData={pokemonSelectedInformation.sprites.front_default}
                pokemonName={pokemonSelectedInformation.name}
              />
              <PokemonTriviaDisplay source={location.state.pokemonSelection} />
            </Box>
            
          </>
        )}
      </Box>
    </Box>
  );
};

export default SinglePokemonDisplay;
