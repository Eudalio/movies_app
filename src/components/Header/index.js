import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { useDebounce } from '../../hooks';
import { fetchMoviesByInput, setSearch, fetchMovies, resetPage } from '../../store/actions/movies';

import { CSSHeader } from './styles';

function Header(props) {
  const debouncedSearch = useDebounce(props.search);

  useEffect(() => {
    if(debouncedSearch) {
      props.fetchMoviesByInput(debouncedSearch)
    } else {
      props.fetchMovies()
    }
  }, [debouncedSearch, props])

  return (
      <CSSHeader>
        <h2>The Movie Films</h2>
        <input
          type="text"
          className="search"
          placeholder="Type a movie"
          value={props.search}
          onChange={e => props.setSearch(e.target.value)}
          onFocus={() => props.resetPage()}
        />
      </CSSHeader>
  );
}

function mapStateToProps(state) {
  return {
    search: state.movies.search,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    fetchMoviesByInput(text) {
      const action = fetchMoviesByInput(text);
      dispatch(action);
    },
    setSearch(text) {
      const action = setSearch(text);
      dispatch(action);
    },
    fetchMovies() {
      const action = fetchMovies();
      dispatch(action);
    },
    resetPage() {
      const action = resetPage();
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Header);