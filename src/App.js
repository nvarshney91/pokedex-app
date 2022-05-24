import React, {Component} from 'react';
import './App.css';
import './css/Pokecard.css'
import Pokecard from './component/Pokecard';
import Pokedex from './component/Pokedex';
import Pokegame from './component/Pokegame';
function App() {
  return (
    <div className='App'>
    <Pokegame />
    </div>
  );
}
export default App;
