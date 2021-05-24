import React, { useState } from 'react';

import { CSSHeader } from './styles';

function Header() {
  const [inputMovie, setInputMovie] = useState(""); 

  return (
      <CSSHeader>
        <h2>The Movie Films</h2>
        <input
          type="text"
          className="search"
          placeholder="Type a movie"
          value={inputMovie}
          onChange={e => setInputMovie(e.target.value)}
        />
      </CSSHeader>
  );
}

export default Header;