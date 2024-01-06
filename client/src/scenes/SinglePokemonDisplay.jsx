import React, { useEffect, useState } from "react";
import "./SinglePokemonDisplay.css";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import axios from "utils/axios";
import SingleImageDisplay from "components/SingleImageDisplay";

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
            </Box>
            <Box>
              <h1>Pokemon Stats</h1>
              {pokemonSelectedInformation.stats.map((statInfo) => {
                return (
                  <h1>
                    {statInfo.stat.name}: {statInfo.base_stat}
                  </h1>
                );
              })}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default SinglePokemonDisplay;
