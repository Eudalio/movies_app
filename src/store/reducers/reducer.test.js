import * as types from '../actions/actionTypes';
import reducer from './movies';

const INITIAL_STATE = {
    page: 1,
    search: '',
    movies: [],
    currentMovie: {}
}

describe('Movies reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(INITIAL_STATE)
    });

    it(`should handle with ${types.FETCH_MOVIES_SUCCESS}`, () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.FETCH_MOVIES_SUCCESS,
                payload: [{}, {}]
            })
        ).toEqual({
            page: 1,
            search: '',
            movies: [{}, {}],
            currentMovie: {}
        })
    });

    it(`should handle with ${types.SET_CURRENT_MOVIE}`, () => {
        const newMovie = {
            id: 1,
            poster_path: 'whatever.jpg'
        }

        expect(!!Object.keys(newMovie).length).toBe(true);

        expect(
            reducer(INITIAL_STATE, {
                type: types.SET_CURRENT_MOVIE,
                payload: newMovie
            })
        ).toEqual({
            page: 1,
            search: '',
            movies: [],
            currentMovie: {
                id: 1,
                poster_path: 'whatever.jpg'
            }
        })
    });

    it(`should handle with ${types.SET_SEARCH}`, () => {
        expect(
            reducer(INITIAL_STATE, {
                type: types.SET_SEARCH,
                payload: 'whatever'
            })
        ).toEqual({
            page: 1,
            search: 'whatever',
            movies: [],
            currentMovie: {}
        })
    });

    it(`should handle with ${types.RESET_PAGE}`, () => {
        expect(
            reducer({...INITIAL_STATE, page: 3}, {
                type: types.RESET_PAGE,
                payload: 1
            })
        ).toEqual({
            page: 1,
            search: '',
            movies: [],
            currentMovie: {}
        })
    });

    it(`should handle with ${types.INCREMENT_PAGE}`, () => {
        const payload = {
            page: 2,
            data: [
                {
                    id: 2,
                    poster_path: 'whatever2.jpg'
                },
                {
                    id: 3,
                    poster_path: 'whatever3.jpg'
                }
            ]
        }

        const state = {...INITIAL_STATE, movies: [{
            id: 1,
            poster_path: 'whatever.jpg'
        }]}

        expect(state.page).toEqual(payload.page - 1)

        expect(
            reducer(state, {
                type: types.INCREMENT_PAGE,
                payload
            })
        ).toEqual({
            page: 2,
            search: '',
            movies: [
                {
                    id: 1,
                    poster_path: 'whatever.jpg'
                },
                {
                    id: 2,
                    poster_path: 'whatever2.jpg'
                },
                {
                    id: 3,
                    poster_path: 'whatever3.jpg'
                }
            ],
            currentMovie: {}
        })
    });
})