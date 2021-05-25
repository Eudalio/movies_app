import { SET_CURRENT_MOVIE, SET_SEARCH, INCREMENT_PAGE, RESET_PAGE, FETCH_MOVIES_SUCCESS } from './actionTypes';
import { setCurrentMovie, setSearch, incrementPage, resetPage, fetchMoviesSuccess } from './movies';

describe('actions', () => {
    it('should create an action to update the current movie', () => {
        const newMovie = {
            id: 1,
            poster_path: 'whatever.jpg'
        }
        const expectedAction = {
            type: SET_CURRENT_MOVIE,
            payload: newMovie
        }

        expect(typeof newMovie).toBe('object')
        expect(expectedAction.type).toBe('SET_CURRENT_MOVIE')
        expect(!!Object.keys(newMovie).length).toBe(true);
        
        expect(setCurrentMovie(newMovie)).toEqual(expectedAction);
    });

    it('should create an action to update the value of text in state: SEARCH', () => {
        const text = 'spyder'
        const expectedAction = {
            type: SET_SEARCH,
            payload: text
        }

        expect(typeof text).toBe("string")
        expect(expectedAction.type).toBe('SET_SEARCH')
        expect(setSearch(text)).toEqual(expectedAction)
    });

    it('should create an action to update the value of PAGE in state', () => {
        const dados = {
            page: 2,
            results: [{}, {}]
        }

        const { page, results: data } = dados
        
        const expectedAction = {
            type: INCREMENT_PAGE,
            payload: {
                page,
                data
            }
        }

        expect(typeof page).toBe("number")
        expect(expectedAction.type).toBe('INCREMENT_PAGE')
        expect(incrementPage(dados)).toEqual(expectedAction)
    });

    it('should create an action to reset the value of PAGE in state', () => {
        const page = 1
        const expectedAction = {
            type: RESET_PAGE,
            payload: page,
        }

        expect(typeof page).toBe("number")
        expect(page).toEqual(1)
        expect(expectedAction.type).toBe('RESET_PAGE')
        expect(resetPage(page)).toEqual(expectedAction)
    });

    it(`should create an action to ${FETCH_MOVIES_SUCCESS}`, () => {
        const data = []
        const expectedAction = {
            type: FETCH_MOVIES_SUCCESS,
            payload: data,
        }

        expect(expectedAction.type).toBe('FETCH_MOVIES_SUCCESS')
        expect(fetchMoviesSuccess(data)).toEqual(expectedAction)
    });
})