import React, { useState, useEffect } from 'react';
import { Container, BtnContainer, SubContainer } from './style';
import { ReactComponent as ArrowLeft } from '../../images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';
import pokeLogo from '../../images/pokemon-logo.png';

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
    setPokemon(result);
  };

  useEffect(() => {
    fetchPokemon();
  }, [pokeId]);

  const onClickNextPokemon = () => {
    setPokeId(pokeId + 1);
  };

  const onClickpPreviousPokemon = () => {
    setPokeId(pokeId - 1);
  };

  return (
    <Container>
      <>
        <img src={ pokeLogo } alt="pokelogo" />
        <SubContainer>
          <span>{ pokemon.id }</span>
          <span>{ pokemon.name }</span>
          <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
          {pokemon.types.map((type) => (
            <p>{ type.type.name }</p>
          ))}
        </SubContainer>
        <BtnContainer>
          <button
            type="button"
            onClick={ onClickpPreviousPokemon }
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            onClick={ onClickNextPokemon }
          >
            <ArrowRight />
          </button>
        </BtnContainer>
      </>
    </Container>
  );
};

export default Home;
