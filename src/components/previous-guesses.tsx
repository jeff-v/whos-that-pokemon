import React, { memo } from 'react';
import { nanoid } from 'nanoid';
import { Pokemon } from './game-container';
import { capitalCase } from 'change-case';
import { Link } from 'react-router-dom';

interface PreviousGuessesProps {
  pokemon: Pokemon[];
}

export default memo(function PreviousGuesses({
  pokemon,
}: PreviousGuessesProps) {
  const previousPokemonJsx = pokemon
    .map((singlePokemon, index) => (
      <div key={nanoid()} className='flex flex-col'>
        <Link to={`/pokedex/${index}`}>
          <img
            alt={`previous pokemon sprite ${index + 1}`}
            src={singlePokemon.sprite}
          />
          <div className='font-extrabold'>
            {capitalCase(singlePokemon.name)}
          </div>
        </Link>
      </div>
    ))
    .filter((singlePokemon, index) => index !== pokemon.length - 1);

  if (pokemon.length === 0) {
    return <></>;
  }

  return <>{previousPokemonJsx}</>;
});
