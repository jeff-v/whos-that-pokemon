import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import GameContainer from './components/game-container/game-container';

const App = () => (
  <div className='App h-screen'>
    <div className='nav flex w-screen justify-center items-center space-x-7 bg-blue-500 h-20 text-white text-2xl mb-30'>
      <Link to='/'>Easy mode</Link>
      <Link to='/hardMode'>Hard mode</Link>
    </div>
    <div className='flex items-center flex-col h-full'>
      <Switch>
        <Route path='/'>
          <GameContainer />
        </Route>
      </Switch>
    </div>
  </div>
);

export default App;
