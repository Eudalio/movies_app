import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
// import { IoArrowDownCircle } from 'react-icons/io5';
import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';
import CardList from '../../components/CardList';
import Card from '../../components/Card';

import { Container } from './styles';

function Movies() {
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    async function loadData() {
      await api.get(`/movie/popular`, {
        params: {
          page: page 
        }
      })
        .then(response => {
          console.log(movies, response.data.results, page)
          setMovies([...movies, ...response.data.results])
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [page])
  

  const handleFetchMore = () => {
    let newPage = page
    setPage(newPage += 1)
  }

  return (
    <Container>
      <Header />
      <Content>
        <InfiniteScroll
          dataLength={movies.length}
          next={handleFetchMore}
          hasMore={true}
          loader={<h4>Fetching more movies...</h4>}
          scrollThreshold="50px">
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

export default Movies;