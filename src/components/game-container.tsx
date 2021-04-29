import React, { useContext, useEffect, useMemo } from 'react';
import { useState } from 'react';
import pokedexApi from '../api/pokedexApi';
import { PokedexContext } from '../App';
import pikaPika from '../pikapika.mp3';
import Guesser from './guesser/guesser';
import PreviousGuesses from './previous-guesses';

export interface Pokemon {
  sprite: string;
  name: string;
  number: string;
}

interface GameContainerProps {
  hardMode?: boolean;
}

export default function GameContainer({ hardMode }: GameContainerProps) {
  const { setPokedexState } = useContext(PokedexContext);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon>();
  // this element gets loaded over and over again if it's a state, so I'm memoizing it for the time being
  const pikachuNoise = useMemo<HTMLAudioElement>(() => new Audio(pikaPika), []);
  const [successClasses, setSuccessClasses] = useState<string>('');

  useEffect(() => {
    console.log(pokemon[pokemon.length - 1]?.name);
    setCurrentPokemon(pokemon[pokemon.length - 1]);
  }, [pokemon]);

  useEffect(() => {
    if (success) {
      setSuccessClasses('text-green-600 animate-bounce absolute inset-0');
      pokedexApi({ setPokemon, setError, setPokedexState });
      pikachuNoise
        .play()
        .catch((err) => console.error(err))
        .finally(() => setSuccess(false));
    }
  }, [pikachuNoise, setPokedexState, success]);

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
        <div className='bg-gray-100 min-h-15 w-screen flex flex-wrap flex-row justify-center content-center items-center'>
          <button
            className='bg-blue-500 h-20 rounded-lg align-text-center w-40 p-2 text-white font-bold mr-5'
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
          onClick={() => pokedexApi({ setPokemon, setError, setPokedexState })}
        >
          Get me a pokemon!
        </button>
        {pokemon[0]?.sprite && (
          <Guesser
            sprite={currentPokemon?.sprite as string}
            name={currentPokemon?.name as string}
            setSuccess={setSuccess}
            hardMode={hardMode}
          />
        )}
      </div>
    </>
  );
}
