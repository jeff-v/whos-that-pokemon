import { Dispatch, SetStateAction } from 'react';
import PokemonEntry from './types/PokemonEntry';

export interface PokedexContextParams {
  pokedexState: PokemonEntry[];
  setPokedexState: Dispatch<SetStateAction<PokemonEntry[]>>;
}

const initialPokedexState: PokemonEntry[] = [
  {
    abilities: [],
    baseExperience: 0,
    forms: [],
    game_indices: [],
    height: NaN,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: NaN,
    past_types: [],
    species: {
      name: '',
      url: '',
    },
    sprites: {
      front_default: '',
      front_shiny: '',
      back_default: '',
      back_shiny: '',
      other: {
        dream_world: {
          front_default: '',
          front_female: '',
        },
        'official-artwork': {
          front_default: '',
        },
      },
      versions: {},
    },
    stats: [],
    types: [],
    weight: NaN,
  },
];

export default initialPokedexState;
