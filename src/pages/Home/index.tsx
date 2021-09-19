import React, { useState, useEffect } from 'react';
import Button from '../../components/Button';

interface IPokedex {
  id: number;
  name: string;
  types: any[];
  sprites: {
    front_default: string;
  };
}

const Home = () => {
  const [pokeId, setPokeId] = useState(1);
  const [pokemon, setPokemon] = useState<IPokedex>(
    { id: 0,
      name: '',
      types: [],
      sprites: {
        front_default: '',
      },
    },
  );
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

  const fetchPokemon = async () => {
    const result = await fetch(url).then((response) => response.json());
    console.log(pokemon);
    setPokemon(result);
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokeId]);

  const onClickNextPokemon = () => {
    setPokeId(pokeId + 1);
    // console.log(pokemon);
  };

  const onClickpPreviousPokemon = () => {
    setPokeId(pokeId - 1);
    // console.log(pokemon);
  };

  return (
    <>
      <h1>Pokedex</h1>
      <span>{ pokemon.id }</span>
      <span>{ pokemon.name }</span>
      {pokemon.types.map((type) => (
        <p>{ type.type.name }</p>
      ))}
      <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
      <Button
        type="button"
        onClick={ onClickpPreviousPokemon }
        label="Previous Pokemon"
      />
      <Button type="button" onClick={ onClickNextPokemon } label="Next Pokemon" />
    </>
  );
};

export default Home;
