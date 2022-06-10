import { useEffect} from "react";
import Pokemon from "../Pokemon/Pokemon";
import s from "./Pokemons.module.css";
import { getAllPokemons } from "../../redux/slices/pokeSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function Pokemons() {
  const dispatch = useDispatch();
  const location = useLocation();
  const allPokemons = useSelector((state) => state.pokeReducer.allPokemons);
  useEffect(() => {
    if (allPokemons.length === 0) {
      dispatch(getAllPokemons());
    }
  });
  return (
    <div className={s.divAll}>
      <div className={s.divTitles}>
        <span className={s.span}>Nombre</span>
        <span className={s.span}>Imagen</span>
        <span className={s.span}>Ataque</span>
        <span className={s.span}>Defensa</span>
        <span
          className={s.span}
          style={{ minWidth: "4rem", paddingLeft: "57px" }}
        >
          Acciones
        </span>
      </div>
      <div className={location.pathname !== "/" ? s.divPokemons : s.divPokemonsBig}>
        {allPokemons &&
          allPokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
      </div>
    </div>
  );
}

export default Pokemons;
