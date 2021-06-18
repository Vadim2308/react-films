import { IActionType } from 'redux/actions/setMovies';
import { TMovie, IFilms } from 'types/global';

interface IState {
  movies: [] | IFilms;
}

const initialState: IState = {
  movies: [],
};

export default function moviesReducer(movies: IState = initialState, action: IActionType): IState {
  switch (action.type) {
    case 'SET_ALL_MOVIES': {
      return {
        ...movies,
        ...action.payload,
      };
    }
    default: {
      return movies;
    }
  }
}
