import { IFilms } from 'types/global';
const SET_ALL_MOVIES = 'SET_ALL_MOVIES';

export interface IActionType {
  type: string;
  payload: {
    movies: [] | IFilms;
  };
}

export const setMovies = (movies: IFilms): IActionType => {
  return {
    type: SET_ALL_MOVIES,
    payload: {
      movies: movies,
    },
  };
};

// https://www.youtube.com/watch?v=uvHcXmqZmiY (9:08)
