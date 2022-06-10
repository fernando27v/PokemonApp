import React from "react";
import s from "./Pokemon.module.css";
import { BsTrashFill, BsPencilSquare, BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import { deletePokemon } from "../../redux/slices/pokeSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Pokemon({ pokemon }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deletePokemon(pokemon.id));
    Swal.fire({
      title: "Pokemon deleted!",
      text: "Do you want to continue",
      icon: "success",
      confirmButtonText: "Cool",
    });
  };

  return (
    <div className={s.divTitles}>
      <div className={s.div}>
        <span className={s.span}>{pokemon.name}</span>
      </div>
      <a href={pokemon.image} className={s.a}>
        <BsCardImage />
      </a>
      <div className={s.div}>
        <span className={s.span}>{pokemon.attack}</span>
      </div>
      <div className={s.div}>
        <span className={s.span}>{pokemon.defense}</span>
      </div>
      <div className={s.actions}>
        <Link to={`/modify/${pokemon.id}`} style={{ textDecoration: "none" }}>
          <BsPencilSquare style={{ color: "#6658f6" }} />
        </Link>
        <BsTrashFill onClick={handleDelete} style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
}

export default Pokemon;
