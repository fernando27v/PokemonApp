import { useState } from "react";
import { BsSaveFill, BsX } from "react-icons/bs";
import s from "./CreatePokemon.module.css";
import { useDispatch } from "react-redux";
import { newPokemon } from "../../redux/slices/pokeSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CreatePokemon() {
  const dispatch = useDispatch();

  const [pokemon, setPokemon] = useState({
    name: "",
    image: "",
    attack: 50,
    defense: 50,
    idAuthor: 1,
    type: "fire",
    hp: 100,
  });

  const handleChange = (e) => {
    setPokemon({ ...pokemon, [e.target.name]: e.target.value });
  };

  const disableButton = () => {
    if (pokemon.name === "" || pokemon.image === "") {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newPokemon(pokemon));
    setPokemon({
      name: "",
      image: "",
      attack: 50,
      defense: 50,
      idAuthor: 1,
      type: "fire",
      hp: 100,
    });
    Swal.fire({
      title: "Pokemon created!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  return (
    <div className={s.divComponent}>
      <h3>Nuevo Pokemon</h3>
      <div className={s.divInputs}>
        <div style={{ marginRight: "7px" }}>
          <label htmlFor="n" className={s.label}>
            Nombre:
          </label>
          {
            <input
              type="text"
              id="n"
              name="name"
              className={pokemon.name !== "" ? s.inputText : s.inputTextError}
              value={pokemon.name}
              onChange={handleChange}
            />
          }
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <label htmlFor="att" className={s.label}>
              Ataque:
            </label>
            <label htmlFor="att" className={s.label}>
              0
            </label>
            <input
              type="range"
              id="att"
              name="attack"
              className={s.inputRange}
              value={pokemon.attack}
              onChange={handleChange}
            ></input>
            <label htmlFor="att" style={{ marginLeft: "5px" }}>
              100
            </label>
          </div>
          <span style={{ fontSize: "14px" }}>{pokemon.attack}</span>
        </div>
      </div>
      <div className={s.divInputs}>
        <div>
          <label htmlFor="img" className={s.label} style={{ padding: "3px" }}>
            Imagen:
          </label>
          <input
            type="url"
            id="img"
            name="image"
            className={pokemon.image !== "" ? s.inputText : s.inputTextError}
            placeholder="url"
            value={pokemon.image}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <div style={{ display: "flex" }}>
            <label htmlFor="def" className={s.label}>
              Defensa:
            </label>
            <label htmlFor="def" className={s.label}>
              0
            </label>
            <input
              id="def"
              type="range"
              min="0"
              max="100"
              name="defense"
              className={s.inputRange}
              value={pokemon.defense}
              onChange={handleChange}
            ></input>
            <label htmlFor="def" style={{ marginLeft: "5px" }}>
              100
            </label>
          </div>
          <span style={{ fontSize: "14px" }}>{pokemon.defense}</span>
        </div>
      </div>
      <div className={s.divButtons}>
        <button
          className={s.button}
          disabled={disableButton()}
          onClick={handleSubmit}
        >
          <BsSaveFill /> Guardar
        </button>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button className={s.button}>
            <BsX style={{ fontSize: "30px" }} /> Cancelar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CreatePokemon;
