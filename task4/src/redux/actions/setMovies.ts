const SET_ALL_MOVIES = 'SET_ALL_MOVIES';

export const setMovies = (movies: any) => {
  return {
    type: SET_ALL_MOVIES,
    payload: {
      movies: movies,
    },
  };
};
