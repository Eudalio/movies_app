import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentMovie } from '../../store/actions/movies';

import { CSSCard } from './styles';

function Card(props) {
    return (
    <CSSCard>
      <Link to="/details" onClick={() => props.setCurrentMovie(props.value)}>
        <img src={props.value.poster_path ? `http://image.tmdb.org/t/p/w500${props.value.poster_path}` : 'https://fakeimg.pl/500x500/?text=Not%20Found'} alt={`${props.value.title}`} />
      </Link>
    </CSSCard>
  );
}

function mapStateToProps(state) {
  return {
    state: state.movies,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    setCurrentMovie(movie) {
      const action = setCurrentMovie(movie);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Card);