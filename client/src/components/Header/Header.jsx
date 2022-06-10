import { React, useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import s from "./Header.module.css";
import {useDispatch} from "react-redux";
import {search} from "../../redux/slices/pokeSlice";

function Header() {

  const [pokemonName, setPokemonName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setPokemonName(e.target.value);
    dispatch(search(e.target.value));
  };

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>Listado de Pokemon</h2>
      <div className={s.header}>
        <div className={s.search}>
          <BsSearch style={{ marginRight: "10px" }} />
          <input
            type="text"
            value={pokemonName}
            onChange={handleChange}
            placeholder="Buscar"
            className={s.input}
          />
        </div>
        <Link to="/new" style={{ textDecoration: "none" }}>
          <button className={s.buttom}>
            <BsPlus style={{ fontSize: "30px", color: "white" }} />
            Nuevo
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
