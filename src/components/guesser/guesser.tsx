import React, { useState } from 'react';

interface GameContainerProps {
  sprite: string;
  name: string;
  setSuccess: (success: boolean) => void;
  hardMode?: boolean;
}

export default function Guesser({
  sprite,
  name,
  setSuccess,
  hardMode,
}: GameContainerProps) {
  const [guess, setGuess] = useState<string>('');
  const [imageAnimation, setImageAnimation] = useState<string>('');

  function checkGuess() {
    if (guess.toLowerCase() === name.toLowerCase()) {
      setSuccess(true);
      setGuess('');
    } else {
      setSuccess(false);
      setImageAnimation('animate-shake');
      setTimeout(() => setImageAnimation(''), 1000);
    }
  }

  console.log(hardMode);

  return (
    <div className='flex items-center h-auto mt-2'>
      <div className='flex flex-col mr-2'>
        <input
          className='border-2 border-black rounded-md mt-5 text-center mb-5'
          value={guess}
          onChange={(event) => setGuess(event.target.value)}
          onKeyDown={(event) =>
            event.key === 'Enter' ? checkGuess() : undefined
          }
        />
        <button
          className='font-bold rounded-md bg-gray-200 p-1'
          onClick={checkGuess}
        >
          Enter guess!
        </button>
      </div>
      <img
        className={`${imageAnimation} ${
          hardMode ? 'filter saturate-0 contrast-0' : ''
        }`}
        alt='sprite'
        src={sprite}
      />
    </div>
  );
}
