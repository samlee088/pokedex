import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import PokemonScrollDisplayScreen from "scenes/PokemonScrollDisplayScreen";

function App() {
  return (
    <div className="Pokedex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageLayout />} />
          <Route
            path="/allPokemonScrollDisplay"
            element={<PokemonScrollDisplayScreen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
