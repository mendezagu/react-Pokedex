import "./styles.css";
import "../components/Navbar";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Pokedex from "../components/Pokedex";
import { getPokemonData, GetPokemons } from "../api";
import { useState, useEffect } from "react";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemon = async () => {
    try {
      const data = await GetPokemons();
      console.log(data.results);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPokemon();
  }, []);
  return (
    <>
      <div>
        <nav>
          <Navbar />
        </nav>
      </div>
      <div className="App">
        <Searchbar />
        <Pokedex pokemons={pokemons} />
      </div>
    </>
  );
}
