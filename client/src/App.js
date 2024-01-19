import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import SinglePokemonDisplay from "scenes/SinglePokemonDisplay";
import PokemonScrollDisplayMaster from "scenes/PokemonScrollDisplayMaster";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import Header from "components/Header";

function App() {
  return (
    <div className="Pokedex">
      <PrimeReactProvider>
        <BrowserRouter>
          <Header />
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
