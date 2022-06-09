import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import CreatePokemon from "./components/CreatePokemon/CreatePokemon";
import ModifyPokemon from "./components/ModifyPokemon/ModifyPokemon";
import s from "./App.module.css"

function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route
            path="new"
            element={
              <>
                <Home />
                <CreatePokemon />
              </>
            }
          />
          <Route
            path="modify/:id"
            element={
              <>
                <Home />
                <ModifyPokemon />
              </>
            }
          />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
