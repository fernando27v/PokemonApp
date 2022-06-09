import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import axios from "axios";
import s from "./Pokemons.module.css";

function Pokemons() {
  const [allPokemons, setAllPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get(
          "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1"
        );
        setAllPokemons(res.data);
      } catch (e) {}
    };
    fetchPokemons();
  });

  return (
    <div>
      <div className={s.divTitles}>
        <span className={s.span}>Nombre</span>
        <span className={s.span}>Imagen</span>
        <span className={s.span}>Ataque</span>
        <span className={s.span}>Defensa</span>
        <span className={s.span}>Acciones</span>
      </div>
      <div>
        {allPokemons &&
          allPokemons.map((pokemon) => {
            return <Pokemon key={pokemon.id} pokemon={pokemon} />;
          })}
      </div>
    </div>
  );
}

export default Pokemons;
