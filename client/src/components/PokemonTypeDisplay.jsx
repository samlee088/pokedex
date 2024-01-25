import React from "react";
import { Chip } from "primereact/chip";

const PokemonTypeDisplay = ({ pokemonTypeData }) => {
  console.log(pokemonTypeData);
  return (
    <div className="card flex flex-wrap gap-2">
      {pokemonTypeData.map((type) => {
        return <Chip label={type.type.name} />;
      })}
    </div>
  );
};

export default PokemonTypeDisplay;
