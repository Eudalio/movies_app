import React from 'react';
import { Link } from 'react-router-dom';

import { CSSCard } from './styles';

function Card({value: item}) {
    return (
    <CSSCard>
      <Link to="/details" onClick={() => localStorage.setItem("currentMovie", JSON.stringify(item))}>
        <img src={`http://image.tmdb.org/t/p/w185${item.poster_path}`} alt="Imagem" />
      </Link>
    </CSSCard>
  );
}

export default Card;