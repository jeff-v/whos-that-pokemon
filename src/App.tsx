import React, { createContext, useState } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import PokemonEntry from './types/PokemonEntry';
import initialPokedexContextState, {
  PokedexContextParams,
} from './initialPokedexContextState';
import GameContainer from './components/game-container';
import PokedexEntry from './components/pokedex-entry';

export const PokedexContext = createContext<PokedexContextParams>(
  {} as PokedexContextParams
);

export default function App() {
  const [pokedexState, setPokedexState] = useState<PokemonEntry[]>(
    initialPokedexContextState
  );

  return (
    <div className='App h-screen'>
      <div className='nav flex w-screen justify-center items-center space-x-7 bg-blue-500 h-20 text-white text-2xl mb-30'>
        <Link to='/whos-that-pokemon'>Easy mode</Link>
        <Link to='/whos-that-pokemon-hard-mode'>Hard mode</Link>
      </div>
      <div className='flex items-center flex-col h-full'>
        <PokedexContext.Provider value={{ pokedexState, setPokedexState }}>
          <Switch>
            <Route exact path={['/', '/whos-that-pokemon']}>
              <GameContainer />
            </Route>
            <Route exact path='/whos-that-pokemon-hard-mode'>
              <GameContainer hardMode />
            </Route>
            <Route path='/pokedex/:positionInPreviousPokemon'>
              <PokedexEntry />
            </Route>
          </Switch>
        </PokedexContext.Provider>
      </div>
    </div>
  );
}
