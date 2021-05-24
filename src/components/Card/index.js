import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentMovie } from '../../store/actions/movies';

import { CSSCard } from './styles';

function Card(props) {
    return (
    <CSSCard>
      <Link to="/details" onClick={() => props.setCurrentMovie(props.value)}>
        <img src={`http://image.tmdb.org/t/p/w500${props.value.poster_path}`} alt={`${props.value.title}`} />
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