import React, { useState, useEffect } from 'react';
import * as S from './style';
import { ReactComponent as ArrowLeft } from '../../images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../../images/arrowRight.svg';
import { ReactComponent as Search } from '../../images/search.svg';
import pokeLogo from '../../images/pokemon-logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

interface IPokedex {
  id: number;
  name: string;
  types: any[];
  sprites: {
    front_default: string;
  };
  abilities: any[];
  stats: any[];
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
      abilities: [],
      stats: [],
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
      <S.SubContainer>
        <img src={ pokeLogo } alt="pokelogo" />
        <S.LeftContainer>
          <S.SearchContainer>
            <Input
              placeholder="Type your pokemon name"
              onChange={ (event) => setPokeName(event.target.value) }
            />
            <Button onClick={ fetchPokemonByName }>
              <Search />
            </Button>
          </S.SearchContainer>
          <span>
            { pokemon.id }
          </span>
          <span>
            { pokemon.name }
          </span>
          <img src={ pokemon.sprites.front_default } alt={ pokemon.name } />
          {pokemon.types.map((type) => (
            <p key={ type.name }>
              { type.type.name }
            </p>
          ))}
        </S.LeftContainer>
        <S.BtnContainer>
          <Button
            type="button"
            onClick={ onClickpPreviousPokemon }
          >
            <ArrowLeft />
          </Button>
          <Button
            type="button"
            onClick={ onClickNextPokemon }
          >
            <ArrowRight />
          </Button>
        </S.BtnContainer>
      </S.SubContainer>
      <S.RightContainer>
        <section>
          <span>
            { pokemon.abilities.map((ability) => (
              <p key={ ability.name }>
                { ability.ability.name }
              </p>
            )) }
          </span>
          { pokemon.stats.map((stat) => (
            <article>
              <p key={ stat.name }>
                { stat.stat.name }:
              </p>
              <p key={ stat.base_stat }>
                { stat.base_stat }
              </p>
            </article>
          )) }
        </section>
      </S.RightContainer>
    </S.Container>
  );
};

export default Home;
