import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { Pokemon } from '../components/game-container/game-container';
import PokemonEntry from '../types/PokemonEntry';

// the total length returned by the API is ~1100 but 898 is the highest I can get results on for some reason
const generatePokemonNumber = () => Math.floor(Math.random() * 898).toString();

interface PokedexApi {
  setPokemon: Dispatch<SetStateAction<Pokemon[]>>;
  setError: (error: boolean) => void;
  setPokedexState: Dispatch<SetStateAction<PokemonEntry[]>>;
}

export default function pokedexApi({
  setPokemon,
  setError,
  setPokedexState,
}: PokedexApi) {
  const pokemonNumber = generatePokemonNumber();

  return axios
    .get<PokemonEntry>(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((res) => {
      const {
        sprites: { front_default: sprite },
        name,
      } = res.data;
      setPokemon((prevState) => [
        ...prevState,
        { sprite, name, number: pokemonNumber },
      ]);
      setPokedexState((prevState) => {
        if (prevState[0].id === 0) {
          return [res.data];
        } else {
          return [...prevState, res.data];
        }
      });
    })
    .catch((err) => {
      console.error(err);
      setError(true);
    });
}
