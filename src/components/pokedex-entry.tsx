import React, { useContext } from 'react';
import { nanoid } from 'nanoid';
import { PokedexContext } from '../../App';
import { Redirect, useParams } from 'react-router-dom';
import { capitalCase } from 'change-case';

interface Params {
  positionInPreviousPokemon: string;
}

export default function PokedexEntry() {
  const { pokedexState } = useContext(PokedexContext);

  const { positionInPreviousPokemon } = useParams<Params>();

  if (pokedexState[0].id === 0) {
    return <Redirect to='/whos-that-pokemon' />;
  }

  const {
    sprites,
    name,
    abilities,
    baseExperience,
    height,
    id,
    forms,
    moves,
    order,
    past_types,
    stats,
    types,
    weight,
  } = pokedexState[parseInt(positionInPreviousPokemon, 10)];

  return (
    <div className='flex items-start m-10'>
      <img
        className='w-1/4 flex-grow'
        alt='sprite'
        src={sprites.front_default}
      />
      <div className='pokemon-info flex flex-col items-start ml-5 flex-grow'>
        <div className='font-black text-xl'>{capitalCase(name)}</div>
        <div>
          <span className='font-extrabold'>ID:</span> {id}
        </div>
        <div>
          <span className='font-extrabold'>Height:</span> {height}
        </div>
        <div>
          <span className='font-extrabold'>Weight:</span> {weight}
        </div>
        <div className='flex'>
          <span className='font-extrabold'>Type:</span>
          {types.map((type) => (
            <div className='flex flex-col ml-1 mr-1' key={nanoid()}>
              {capitalCase(type.type.name)}
            </div>
          ))}
        </div>
        {past_types.length > 0 && (
          <div>
            <span className='font-extrabold'>Past Types:</span>
            {past_types.map((pastType) =>
              pastType.types.map((type) => (
                <div key={nanoid()}>{capitalCase(type.type.name)}</div>
              ))
            )}
          </div>
        )}
        <div className='flex'>
          <span className='font-extrabold'>Forms:</span>
          {forms.map((form) => (
            <div className='ml-1 mr-1' key={nanoid()}>
              {capitalCase(form.name)}
            </div>
          ))}
        </div>
        <div>
          <span className='font-extrabold'>Order:</span> {order}
        </div>
        {baseExperience && <div>Base Experience: {baseExperience}</div>}
        <div className='flex items-start justify-evenly'>
          <span className='font-extrabold'>Stats:</span>
          {stats.map((stat) => (
            <div
              className='flex flex-col flex-wrap mr-10 ml-1 items-start'
              key={nanoid()}
            >
              <div className='whitespace-nowrap'>
                <span className='font-semibold'>Name:</span>{' '}
                {capitalCase(stat.stat.name)}
              </div>
              <div className='whitespace-nowrap'>
                <span className='font-semibold'>Base Stat:</span>
                <span>{stat.base_stat}</span>
              </div>
              <div>
                <span className='font-semibold'>Effort:</span> {stat.effort}
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-start'>
          <span className='font-extrabold'>Abilities:</span>
          <div className='flex'>
            {abilities.map((ability) => (
              <div
                className='flex flex-col ml-1 mr-1 items-start'
                key={nanoid()}
              >
                <div>
                  <span className='font-semibold'>Name:</span>
                  {capitalCase(ability.ability.name)}
                </div>
                <div>
                  <span className='font-semibold'>Slot:</span> {ability.slot}
                </div>
                {ability.is_hidden && (
                  <div className='font-bold'>Hidden ability</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-start flex-wrap justify-between'>
          <div>
            <span className='font-extrabold'>Moves:</span>
          </div>
          <ul className='flex flex-col items-start'>
            {moves.map((move) => (
              <li className='ml-1 mr-1 flex flex-col' key={nanoid()}>
                {capitalCase(move.move.name)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
