import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import PokemonScrollDisplayScreenGenOne from "scenes/PokemonScrollDisplayScreenGenOne";
import PokemonScrollDisplayScreenGenTwo from "scenes/PokemonScrollDisplayScreenGenTwo";
import PokemonScrollDisplayScreenGenThree from "scenes/PokemonScrollDisplayScreenGenThree";
import PokemonScrollDisplayScreenGenFour from "scenes/PokemonScrollDisplayScreenGenFour";

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
          <Route
            path="/PokemonScrollDisplayScreenGenFour"
            element={<PokemonScrollDisplayScreenGenFour />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
