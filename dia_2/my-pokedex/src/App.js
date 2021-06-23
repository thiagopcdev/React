import './App.css';
import pokeList from './data';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
        <h1>POKEDEX</h1>
        <Pokedex pokeList={pokeList}/>

    </div>
  );
}

export default App;
