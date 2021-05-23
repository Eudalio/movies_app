import {
    INCREMENT_PAGE,
    FETCH_MOVIES_SUCCESS,
    SET_CURRENT_MOVIE
} from './actionTypes';

import api from '../../services/api';

export function incrementPage(moreMovies) {
    const {page, results: data} = moreMovies
    return {
        type: INCREMENT_PAGE,
        payload: {
            page,
            data
        }
    }
}

export function fetchMoreMovies(newPage) {
    console.log('actions: ')
    return async dispatch => {
        try {
            const movies = await api.get(`/movie/popular`, {
                params: {
                    page: newPage
                }
            });
            dispatch(incrementPage(movies.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function fetchMoviesSuccess(movies) {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payload: movies
    }
}

export function fetchMovies() {
    console.log('actions: ')
    return async dispatch => {
        try {
            const movies = await api.get(`/movie/popular`);
            dispatch(fetchMoviesSuccess(movies.data.results))
        } catch (e) {
            console.log(e)
        }
    }
}

export function setCurrentMovie(newMovie) {
    return {
        type: SET_CURRENT_MOVIE,
        payload: newMovie
    }
}