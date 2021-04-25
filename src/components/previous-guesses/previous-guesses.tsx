import React from 'react';
import { nanoid } from 'nanoid';
import { Pokemon } from '../game-container/game-container';
import convertToTitleCase from '../../util/convertToTitleCase';

interface PreviousGuessesProps {
  pokemon: Pokemon[];
}

export default function PreviousGuesses({ pokemon }: PreviousGuessesProps) {
  const previousPokemonJsx = pokemon
    .map((singlePokemon, index) => (
      <div key={nanoid()} className='flex flex-col'>
        <img
          alt={`previous pokemon sprite ${index + 1}`}
          src={singlePokemon.sprite}
        />
        <div className='font-extrabold'>
          {convertToTitleCase(singlePokemon.name)}
        </div>
      </div>
    ))
    .filter((singlePokemon, index) => index !== pokemon.length - 1);

  if (pokemon.length === 0) {
    return <></>;
  }

  return (
    <div className='flex justify-evenly items-centert pb-10'>
      {previousPokemonJsx}
    </div>
  );
}
