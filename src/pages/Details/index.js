import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import { IoArrowDownCircle } from 'react-icons/io5';
import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, CSSDetails } from './styles';
import "react-circular-progressbar/dist/styles.css";

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
            <h1>{currentMovie.title} <span className="year">({moment(currentMovie.release_date).year()})</span></h1>
            <span className="genres">
              {moment(currentMovie.release_date).format('DD/MM/YYYY')} ({currentMovie.original_language.toUpperCase()}) -
              {genres.map((genre, index) => (
                <span key={genre.id} className="genres"> {index === (genres.length - 1) ? genre.name : ` ${genre.name}, `} </span>
              ) )}
            </span>
            <div className="infos">
              <div className="circle-progress">
                <CircularProgressbar
                  value={currentMovie.vote_average}
                  text={`${(currentMovie.vote_average).toFixed(1)}`}
                  background
                  className="progress"
                  maxValue="10"
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#081c22",
                    textColor: "#fff",
                    trailColor: "#204529",
                    pathColor: "#22d079",
                    textSize: "24px",
                  })}
                  />
                  <strong>Avaliação dos usuários</strong>
              </div>
            </div>
            <h3>Overview</h3>
            <span>{currentMovie.overview}</span>
          </div>
        </CSSDetails>
      </Content>
    </Container>
  );
}

export default Details;