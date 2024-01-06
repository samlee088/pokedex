import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import SinglePokemonDisplay from "scenes/SinglePokemonDisplay";
import PokemonScrollDisplayMaster from "scenes/PokemonScrollDisplayMaster";

function App() {
  return (
    <div className="Pokedex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageLayout />} />
          <Route
            path="/pokedexGeneration"
            element={<PokemonScrollDisplayMaster />}
          />

          <Route path="/SinglePokemon" element={<SinglePokemonDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
