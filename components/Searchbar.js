import React from "react";
import { SearchPokemon } from "../api";
import { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onClick = async (e) => {
    const data = await SearchPokemon(search);
    setPokemon(data);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          className="searchbar-input"
          placeholder="Buscar pokemon..."
          onChange={onChange}
        />
        <div className="searchbar-btn">
          <button onClick={onClick}>Buscar</button>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
