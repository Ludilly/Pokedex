import React, { useState, useEffect } from 'react';
import * as S from './style';
import { ReactComponent as ArrowLeft } from '../../images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';
import { ReactComponent as Search } from '../../images/search.svg';
import pokeLogo from '../../images/pokemon-logo.png';
import Input from '../../components/Input';

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
  const [pokeName, setPokeName] = useState('');
  const [pokemon, setPokemon] = useState<IPokedex>(
    { id: 1,
      name: '',
      types: [],
      sprites: {
        front_default: '',
      },
    },
  );
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
  const nameUrl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

  const fetchPokemonByName = async () => {
    const result = await fetch(nameUrl).then((response) => response.json());
    setPokemon(result);
  };

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
    <S.Container>
      <>
        <img src={ pokeLogo } alt="pokelogo" />
        <S.SubContainer>
          <S.SearchContainer>
          <Input
            placeholder="Type your pokemon name"
            onChange={ (event) => setPokeName(event.target.value) }
          />
          <button onClick={fetchPokemonByName}><Search/></button>
          </S.SearchContainer>
          <span>{ pokemon.id }</span>
          <span>{ pokemon.name }</span>
          <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
          {pokemon.types.map((type) => (
            <p key={ type.name }>
              { type.type.name }
            </p>
          ))}
        </S.SubContainer>
        <S.BtnContainer>
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
        </S.BtnContainer>
      </>
    </S.Container>
  );
};

export default Home;
