import {
    INCREMENT_PAGE,
    FETCH_MOVIES_SUCCESS,
    SET_CURRENT_MOVIE,
    SET_SEARCH,
    RESET_PAGE
} from '../actions/actionTypes';

const INITIAL_STATE = {
    page: 1,
    search: '',
    movies: [],
    currentMovie: {}
}

export default function movieReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case RESET_PAGE:
            return {
                ...state,
                page: action.payload,
            }
        case INCREMENT_PAGE:
            return {
                ...state,
                page: action.payload.page,
                movies: [...state.movies, ...action.payload.data]
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: [...action.payload]
            }
        case SET_CURRENT_MOVIE:
            return {
                ...state,
                currentMovie: action.payload
            }
        default: 
            return state;
    }
}