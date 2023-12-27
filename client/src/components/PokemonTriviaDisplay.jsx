import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "utils/axios";

const PokemonTriviaDisplay = ({ source }) => {
  const [pokemonTrivia, setPokemonTrivia] = useState([]);

  useEffect(() => {
    async function requestData(pokemonID) {
      const speciesRequest = await axios.get(`/pokemon-species/${pokemonID}`);
      console.log(speciesRequest.data);
      let speciesRequestTrivia = [];
      speciesRequest.data.flavor_text_entries.map((x) => {
        console.log(x);
        // if (x.language.name === "en") {
        //   setPokemonTrivia((prevPokemonTrivia) => [
        //     ...prevPokemonTrivia,
        //     x.flavor_text,
        //   ]);
        // }
        
        if (x.language.name === "en") {
          speciesRequestTrivia = [...speciesRequestTrivia, x.flavor_text];
        }

        let dupRemove = new Set(speciesRequestTrivia)
        setPokemonTrivia([...dupRemove])
      });
    }

    requestData(source);
  }, [source]);

  return (
    <Box>
      <h1>Hello world</h1>
      {pokemonTrivia.map((x) => {
        return <p id={x}>{x}</p>;
      })}
    </Box>
  );
};

export default PokemonTriviaDisplay;
