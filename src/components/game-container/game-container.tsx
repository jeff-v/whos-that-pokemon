import React, { useEffect } from 'react';
import { useState } from 'react';
import pokedexApi from '../../api/pokedexApi';
import pikaPika from '../../pikapika.mp3';
import Guesser from '../guesser/guesser';
import PreviousGuesses from '../previous-guesses/previous-guesses';

export interface Pokemon {
  sprite: string;
  name: string;
  number: string;
}

export default function GameContainer() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  const [pikachuNoise] = useState<HTMLAudioElement>(new Audio(pikaPika));
  const [successClasses, setSuccessClasses] = useState<string>('');

  useEffect(() => {
    console.log(pokemon[pokemon.length - 1]?.name);
    setCurrentPokemon(pokemon[pokemon.length - 1]);
  }, [pokemon]);

  useEffect(() => {
    if (success) {
      setSuccessClasses('text-green-600 animate-bounce absolute inset-0');
      pokedexApi({ pokemon, setPokemon, setError });
      pikachuNoise
        .play()
        .then(() => undefined)
        .catch((err) => console.error(err))
        .finally(() => setSuccess(false));
    }
  }, [pikachuNoise, pokemon, success]);

  if (error) {
    return (
      <div className='font-bold'>
        Oh no, Team Rocket messed up our GET request!
      </div>
    );
  }

  return (
    <>
      {success && <span className={`${successClasses}`}>You did it!</span>}
      {pokemon.length > 1 && (
        <div className='bg-gray-100 min-h-15 w-screen flex justify-center items-baseline space-y-10'>
          <button
            className='bg-blue-500 h-20 rounded-lg align-text-center w-40 p-2 text-white font-bold self-center mr-5'
            onClick={() => setPokemon([])}
          >
            Clear Previous Guesses
          </button>
          <PreviousGuesses pokemon={pokemon} />
        </div>
      )}
      <div className='h-full mt-8 w-full flex flex-col items-center'>
        <button
          className='rounded-md border-gray-500 cursor-auto bg-red-700 text-white p-4'
          data-testid='get-new-pokemon'
          onClick={() => pokedexApi({ pokemon, setPokemon, setError })}
        >
          Get me a pokemon!
        </button>
        {pokemon[0]?.sprite && (
          <Guesser
            sprite={currentPokemon?.sprite as string}
            name={currentPokemon?.name as string}
            setSuccess={setSuccess}
          />
        )}
      </div>
    </>
  );
}
