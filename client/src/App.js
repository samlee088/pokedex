import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import SinglePokemonDisplay from "scenes/SinglePokemonDisplay";
import PokemonScrollDisplayMaster from "scenes/PokemonScrollDisplayMaster";

import { PrimeReactProvider } from "primereact/api";

function App() {
  return (
    <div className="Pokedex">
      <PrimeReactProvider>
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
      </PrimeReactProvider>
    </div>
  );
}

export default App;
