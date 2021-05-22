import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { IoArrowDownCircle } from 'react-icons/io5';
import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, CSSDetails } from './styles';

function Details() {
  const [currentMovie, setCurrentMovie] = useState(JSON.parse(localStorage.getItem("currentMovie")))
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function loadData() {
      await api.get(`/genre/movie/list`)
        .then(response => {
          const allGenres = response.data.genres;
          let genres = []
          currentMovie.genre_ids.forEach(genreId => {
            genres.push(allGenres.filter(item => item.id === genreId)[0])
          });
          setGenres(genres)
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [])

  console.log(currentMovie, genres)

  return (
    <Container>
      <Header />
      <Content>
        <CSSDetails>
          <div className="thumbnail">
            <img src={`http://image.tmdb.org/t/p/w185${currentMovie.poster_path}`} alt="Imagem" />
          </div>
          <div className="details-movie">
            <h1>{currentMovie.title} ({moment(currentMovie.release_date).year()})</h1>
            <span>
              {moment(currentMovie.release_date).format('DD/MM/YYYY')} ({currentMovie.original_language.toUpperCase()}) -
              {genres.map((genre, index) => (
                <span key={genre.id}> {index === (genres.length - 1) ? genre.name : ` ${genre.name}, `} </span>
              ) )}
            </span>
            <h3>Overview:</h3>
            <span>{currentMovie.overview}</span>

            <div className="circle-progress" style={{ width: 100, height: 100, textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CircularProgressbar
                value={currentMovie.vote_average}
                text={`${(currentMovie.vote_average).toFixed(1)}`}
                background
                maxValue="10"
                backgroundPadding={6}
                styles={buildStyles({
                  backgroundColor: "#3e98c7",
                  textColor: "#fff",
                  pathColor: "#fff",
                  textSize: "20px",
                  trailColor: "transparent"
                })}
                />
            </div>
          </div>
        </CSSDetails>
      </Content>
    </Container>
  );
}

export default Details;