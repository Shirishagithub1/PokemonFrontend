import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPokemon from './components/Add/AddPokemon'
import PokemonList from './components/List/PokemonList'
import AddPokemonToUser from './components/pokemonUsers/AddPokemonToUser'
import HomePage from './components/HomePage'

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/list-pokemon">List Pokemon</Link>
            </li>
            <li>
              <Link to="/add-pokemon">Add Pokemon User</Link>
            </li>
            <li>
              <Link to="/add-pokemon-to-user">Add Pokemon to User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/list-pokemon" element={<PokemonList />} />
          <Route path="/add-pokemon" element={<AddPokemon />} />
          <Route path="/add-pokemon-to-user" element={<AddPokemonToUser />} />
          <Route path="/edit-pokemon/:ownerName" element={<AddPokemon />} />x
        </Routes>
      </div>
    </Router>
  )
}

export default App