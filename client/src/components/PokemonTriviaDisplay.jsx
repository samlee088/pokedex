import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "utils/axios";

const PokemonTriviaDisplay = ({ source }) => {
  const [pokemonTrivia, setPokemonTrivia] = useState([]);

  useEffect(() => {
    async function requestData(pokemonID) {
      const speciesRequest = await axios.get(`/pokemon-species/${pokemonID}`);
      console.log(speciesRequest.data);

      speciesRequest.data.flavor_text_entries.map((x) => {
        console.log(x);
        if (x.language.name === "en") {
          setPokemonTrivia([...pokemonTrivia, x.flavor_text]);
        }
        return;
      });
    }

    requestData(source);
  }, [source]);

  return (
    <Box>
      <h1>Hello world</h1>
      {pokemonTrivia.map((x) => {
        return <h1 id={x}>{x}</h1>;
      })}
    </Box>
  );
};

export default PokemonTriviaDisplay;
