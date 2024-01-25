import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./PokemonStatsGridDisplay.css";

const PokemonStatsGridDisplay = ({ pokemonStats }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let scrubbedPokemonStats = pokemonStats.map((stats) => {
      return {
        base_stat: stats.base_stat,
        stat_name: stats.stat.name,
      };
    });
    setProducts(scrubbedPokemonStats);
  }, [pokemonStats]);

  return (
    <div className="card">
      <DataTable
        value={products}
        removableSort
        stripedRows
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="stat_name"
          header="Stat"
          sortable
          style={{ width: "50%" }}
        />
        <Column
          field="base_stat"
          header="Value"
          sortable
          style={{ width: "80%" }}
        />
      </DataTable>
    </div>
  );
};

export default PokemonStatsGridDisplay;
