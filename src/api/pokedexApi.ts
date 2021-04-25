import axios from 'axios';
import { Pokemon } from '../components/game-container/game-container';
import PokemonEntry from '../types/PokemonEntry';

// the total length returned by the API is ~1100 but 898 is the highest I can get results on for some reason
const generatePokemonNumber = () => Math.floor(Math.random() * 898).toString();

interface PokedexApi {
  pokemon: Pokemon[];
  setPokemon: (pokemon: Pokemon[]) => void;
  setError: (error: boolean) => void;
}

export default function pokedexApi({
  pokemon,
  setPokemon,
  setError,
}: PokedexApi) {
  const pokemonNumber = generatePokemonNumber();

  return axios
    .get<PokemonEntry>(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
    .then((res) => {
      const {
        sprites: { front_default: sprite },
        name,
      } = res.data;
      setPokemon([...pokemon, { sprite, name, number: pokemonNumber }]);
    })
    .catch((err) => {
      console.error(err);
      setError(true);
    });
}
