import {
    INCREMENT_PAGE,
    FETCH_MOVIES_SUCCESS,
    SET_CURRENT_MOVIE
} from '../actions/actionTypes';

const INITIAL_STATE = {
    page: 1,
    movies: [],
    currentMovie: {}
}

export default function movieReducer(state = INITIAL_STATE, action) {
    switch(action.type){
        case INCREMENT_PAGE:
            return {
                ...state,
                page: action.payload.page,
                movies: [...state.movies, ...action.payload.data]
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