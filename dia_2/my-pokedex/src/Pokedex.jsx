import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const pokeList = this.props.pokeList;
    return (
      <section className="poke-list">
        {pokeList.map((pokemon) =>  <Pokemon key={pokemon.id} data={pokemon} />)}
      </section>
    )
  }
}

export default Pokedex;