import { Box } from "@mui/material";
import React from "react";
import "scenes/PokemonScrollDisplayScreenGen.css";
import { useNavigate } from "react-router-dom";

const PokedexImageClick = ({ pokemonData }) => {
  const navigate = useNavigate();

  async function singlePokemonRoute(pokemonSelection) {
    navigate("/singlePokemon", {
      state: { pokemonSelection: pokemonSelection },
    });
  }

  return (
    <Box>
      <img
        className="pokemonSpriteDisplay"
        src={pokemonData.pokemonSprite}
        alt={pokemonData.pokemonName}
        onClick={() => singlePokemonRoute(pokemonData.pokemonNumber)}
      />
    </Box>
  );
};

export default PokedexImageClick;
