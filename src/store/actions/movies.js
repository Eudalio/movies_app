import {
    RESET_PAGE,
    INCREMENT_PAGE,
    FETCH_MOVIES_SUCCESS,
    SET_CURRENT_MOVIE,
    SET_SEARCH
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

export function fetchMoreMovies(newPage, search) {
    const url = search ? '/search/movie' : '/movie/popular';
    const params = {
        page: newPage
    }

    if(search) {
        params.query = search
    }

    return async dispatch => {
        try {
            const movies = await api.get(`${url}`, {
                params
            });
            dispatch(incrementPage(movies.data))
        } catch (e) {
            console.log(e)
        }
    }
}

export function fetchMoviesByInput(search) {
    return async dispatch => {
        try {
            const movies = await api.get(`/search/movie`, {
                params: {
                    query: search
                }
            });
            dispatch(fetchMoviesSuccess(movies.data.results))
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

export function setSearch(text) {
    return {
        type: SET_SEARCH,
        payload: text
    }
}

export function resetPage(page = 1) {
    return {
        type: RESET_PAGE,
        payload: page
    }
}