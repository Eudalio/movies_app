import React, {useState, useEffect} from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { IoArrowBackCircle } from 'react-icons/io5';
import { connect } from 'react-redux';

import api from '../../services/api';

import Header from '../../components/Header';
import Content from '../../components/Content';

import { Container, CSSDetails } from './styles';
import "react-circular-progressbar/dist/styles.css";

function Details(props) {
  const [genres, setGenres] = useState([])
  const { currentMovie } = props

  useEffect(() => {
    async function loadData() {
      await api.get(`/genre/movie/list`)
        .then(response => {
          const allGenres = response.data.genres;
          let genres = []
          currentMovie.genre_ids.forEach(genreId => {
            genres.push(allGenres.find(item => item.id === genreId))
          });
          setGenres(genres)
        })
        .catch(err => console.log(err))
    }
    loadData()
  }, [currentMovie.genre_ids])

  return (
    <Container>
      <Header />
      <Content>
        <CSSDetails imgBg={currentMovie.backdrop_path ? `http://image.tmdb.org/t/p/w500${currentMovie.backdrop_path}` : 'https://fakeimg.pl/500x300/?text=Not%20Found'}>
          <div className="btn-back">
            <Link to="/">
              <IoArrowBackCircle size={30}/>
              <span>Voltar ao inicio</span>
            </Link>
          </div>
          <div className="thumbnail">
            <img src={currentMovie.poster_path ? `http://image.tmdb.org/t/p/w500${currentMovie.poster_path}` : 'https://fakeimg.pl/500x500/?text=Not%20Found'} alt="Imagem" />
          </div>
          <div className="details-movie">
            <h1>{currentMovie.title} <span className="year">({moment(currentMovie.release_date).year()})</span></h1>
            <span className="genres">
              {moment(currentMovie.release_date).format('DD/MM/YYYY')} ({currentMovie.original_language.toUpperCase()}) -
              {genres.map((genre, index) => (
                <span key={genre.id} className="genres">
                  {index === (genres.length - 1) ? genre.name : ` ${genre.name}, `}
                </span>
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
            <h3>Resumo</h3>
            <span>{currentMovie.overview}</span>
          </div>
        </CSSDetails>
      </Content>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    currentMovie: state.movies.currentMovie,
  };
}

export default connect(mapStateToProps)(Details);