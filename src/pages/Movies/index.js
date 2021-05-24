import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import Content from '../../components/Content';
import CardList from '../../components/CardList';
import Card from '../../components/Card';

import { fetchMoreMovies } from '../../store/actions/movies';

import { Container } from './styles';

function Movies(props) {
  const { page, movies, search } = props;

  return (
    <Container>
      <Header />
      <Content>
        <InfiniteScroll
          dataLength={movies.length}
          next={() => props.fetchMoreMovies(page, search)}
          hasMore={true}
          loader={<h4>Fetching more movies...</h4>}
          scrollThreshold="0px">
          <CardList>
            {movies.map(movie => (
              <Card key={Math.random()} value={movie} />
            ))}
          </CardList>
        </InfiniteScroll>
      </Content>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    page: state.movies.page,
    search: state.movies.search,
    movies: state.movies.movies,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    fetchMoreMovies(page, search) {
      const action = fetchMoreMovies(page += 1, search);
      dispatch(action);
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Movies);