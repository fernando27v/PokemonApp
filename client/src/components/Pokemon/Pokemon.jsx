import React from "react";
import s from "./Pokemon.module.css";
import { BsTrashFill, BsPencilSquare, BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";

function Pokemon({ pokemon }) {

  const handleDelete = async () => {
    try{
      const res = await axios.delete(
      `https://pokemon-pichincha.herokuapp.com/pokemons/${pokemon.id}`
    );
    }catch(e){
      
    }
    
  };

  return (
    <div className={s.divTitles}>
      <div className={s.div}><span className={s.span}>{pokemon.name}</span></div>
      <a href={pokemon.image} className={s.a}>
       
        <BsCardImage />
      </a>
      <div className={s.div}><span className={s.span}>{pokemon.attack}</span></div>
      <div className={s.div}><span className={s.span}>{pokemon.defense}</span></div>
      <div className={s.actions}>
        <Link to={`/modify/${pokemon.id}`} style={{ textDecoration: "none" }}>
          <BsPencilSquare style={{color:"#6658f6"}}/>
        </Link>
        <BsTrashFill onClick={handleDelete} style={{cursor:"pointer"}}/>
      </div>
    </div>
  );
}

export default Pokemon;
