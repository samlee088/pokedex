import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageLayout from "scenes/HomepageLayout";
import PokemonScrollDisplayScreenGenOne from "scenes/PokemonScrollDisplayScreenGenOne";
import PokemonScrollDisplayScreenGenTwo from "scenes/PokemonScrollDisplayScreenGenTwo";
import PokemonScrollDisplayScreenGenThree from "scenes/PokemonScrollDisplayScreenGenThree";
import PokemonScrollDisplayScreenGenFour from "scenes/PokemonScrollDisplayScreenGenFour";
import PokemonScrollDisplayScreenGenFive from "scenes/PokemonScrollDisplayScreenGenFive";
import PokemonScrollDisplayScreenGenSix from "scenes/PokemonScrollDisplayScreenGenSix";
import PokemonScrollDisplayScreenGenSeven from "scenes/PokemonScrollDisplayScreenGenSeven";
import PokemonScrollDisplayScreenGenEight from "scenes/PokemonScrollDisplayScreenGenEight";
import PokemonScrollDisplayScreenGenNine from "scenes/PokemonScrollDisplayScreenGenNine";

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
          <Route
            path="/PokemonScrollDisplayScreenGenFive"
            element={<PokemonScrollDisplayScreenGenFive />}
          />
          <Route
            path="/PokemonScrollDisplayScreenGenSix"
            element={<PokemonScrollDisplayScreenGenSix />}
          />
          <Route
            path="/PokemonScrollDisplayScreenGenSeven"
            element={<PokemonScrollDisplayScreenGenSeven />}
          />
          <Route
            path="/PokemonScrollDisplayScreenGenEight"
            element={<PokemonScrollDisplayScreenGenEight />}
          />
          <Route
            path="/PokemonScrollDisplayScreenGenNine"
            element={<PokemonScrollDisplayScreenGenNine />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
