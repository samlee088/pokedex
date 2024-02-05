import React, { useEffect, useState } from "react";
import "./SinglePokemonDisplay.css";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "utils/axios";
import SingleImageDisplay from "components/SingleImageDisplay";
import PokemonStatsGridDisplay from "components/PokemonStatsGridDisplay";
import PokemonTypeDisplay from "components/PokemonTypeDisplay";
import { Button } from "primereact/button";

const SinglePokemonDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [pokemonSelectedInformation, setPokemonSelectedInformation] =
    useState("");
  const [prevNextPokemonInformation, setprevNextPokemonInformation] = useState(
    []
  );

  useEffect(() => {
    console.log(location);
  }, []);

  useEffect(() => {
    async function singlePokemon(pokemonSelection) {
      const request = await axios.get(`/pokemon/${pokemonSelection}`);
      setPokemonSelectedInformation(request.data);

      console.log(request.data);

      let prevNext = [];
      if (pokemonSelection >= 2) {
        const request = await axios.get(`/pokemon/${pokemonSelection - 1}`);
        prevNext.push(request.data);
      } else {
        prevNext.push("end");
      }
      if (pokemonSelection <= 1009) {
        const request = await axios.get(`/pokemon/${pokemonSelection + 1}`);
        prevNext.push(request.data);
      } else {
        prevNext.push("end");
      }

      setprevNextPokemonInformation(prevNext);
      console.log(prevNext);
      return request;
    }
    singlePokemon(Number(location.state.pokemonSelection));
  }, [location.state.pokemonSelection]);

  async function singlePokemonRoute(pokemonSelection) {
    navigate("/singlePokemon", {
      state: { pokemonSelection: pokemonSelection },
    });
  }

  return (
    <>
      <Box className="outerContainer">
        {prevNextPokemonInformation &&
          prevNextPokemonInformation.length &&
          prevNextPokemonInformation[0] != "end" && (
            <div className="button-container top-left">
              <h2>
                {prevNextPokemonInformation[0].name} #
                {prevNextPokemonInformation[0].id}
              </h2>
              <Button
                className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700"
                onClick={() =>
                  singlePokemonRoute(prevNextPokemonInformation[0].id)
                }
              >
                <img
                  alt="logo"
                  src={prevNextPokemonInformation[0].sprites.front_default}
                  className="h-2rem"
                />
              </Button>
            </div>
          )}
        <Box className="singlePokemonOuterContainer">
          <Box className="singlePokemonInnerContainer">
            <h1>
              {pokemonSelectedInformation.name} #{pokemonSelectedInformation.id}
            </h1>
            <h2>Weight: {pokemonSelectedInformation.weight}</h2>

            {pokemonSelectedInformation != "" && (
              <>
                <Box className="pokemonImageDisplay">
                  <SingleImageDisplay
                    imageData={pokemonSelectedInformation.sprites.front_default}
                    pokemonName={pokemonSelectedInformation.name}
                  />
                </Box>
                <Box>
                  <PokemonTypeDisplay
                    pokemonTypeData={pokemonSelectedInformation.types}
                  />
                </Box>
                <Box>
                  <h1>Pokemon Stats</h1>
                  <PokemonStatsGridDisplay
                    pokemonStats={pokemonSelectedInformation.stats}
                  />
                </Box>
              </>
            )}
          </Box>
        </Box>
        {prevNextPokemonInformation &&
          prevNextPokemonInformation.length &&
          prevNextPokemonInformation[1] != "end" && (
            <div className="button-container top-left">
              <h2>
                {prevNextPokemonInformation[1].name} #
                {prevNextPokemonInformation[1].id}
              </h2>
              <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700"  onClick={() =>
                  singlePokemonRoute(prevNextPokemonInformation[1].id)
                }>
                <img
                  alt="logo"
                  src={prevNextPokemonInformation[1].sprites.front_default}
                  className="h-2rem"
                />
              </Button>
            </div>
          )}
      </Box>
    </>
  );
};

export default SinglePokemonDisplay;
