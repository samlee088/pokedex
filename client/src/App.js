import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import PokemonScrollDisplayScreenGenOne from "scenes/PokemonScrollDisplayScreenGenOne";
import PokemonScrollDisplayScreenGenTwo from "scenes/PokemonScrollDisplayScreenGenTwo";
import PokemonScrollDisplayScreenGenThree from "scenes/PokemonScrollDisplayScreenGenThree";

function App() {
  return (
    <div className="Pokedex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomepageLayout />} />
          <Route
            path="/PokemonScrollDisplayScreenGenOne"
            element={<PokemonScrollDisplayScreenGenOne />}
          />
          <Route
            path="/PokemonScrollDisplayScreenGenTwo"
            element={<PokemonScrollDisplayScreenGenTwo />}
          />
          <Route
            path="/PokemonScrollDisplayScreenGenThree"
            element={<PokemonScrollDisplayScreenGenThree />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
