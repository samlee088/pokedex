import React, { useEffect, useRef, useState } from "react";
import axios from "utils/axios";

const PokemonScrollDisplayScreen = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let array = [];

      for (let i = 1; i < 151; i++) {
        const request = await axios.get(`/pokemon/${i}`);
        array.push([request.data.name]);
      }
      setPokemonData(array);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon Scroll Cards</h1>
    </div>
  );
};

export default PokemonScrollDisplayScreen;
