import MovieList from './MovieList';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { IFilters, IFilms, TMovie } from 'types/global';
import { useEffect } from 'react';
import { setMovies } from 'redux/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

type TProps = {
  page: number;
  filters: IFilters;
};

export default function MoviesContainer({ page, filters }: TProps) {
  const dispatch = useDispatch();
  const movies = useSelector((state: IFilms) => state.Movies.movies);

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    getMovies();
  }, [page, filters]);

  const getMovies = () => {
    const { sort_by, year, filteredGenre, voite } = filters;
    const currentGenre = filteredGenre.join(',');
    if (year.length > 4) {
      const firstDate = year.slice(0, 4);
      const secondDate = year.slice(5, 10);
      const link = `${API_URL}/discover/movie?api_key=${API_KEY_STORE_FILM}&language=ru=RU&sort_by=${sort_by}&page=${page}&primary_release_date.gte=${firstDate}-01-01&primary_release_date.lte=${secondDate}-01-01&vote_average.gte=${voite}`;
      return changeState(link);
    }
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_STORE_FILM}&language=ru=RU&sort_by=${sort_by}&page=${page}&primary_release_year=${year}&with_genres=${currentGenre}&vote_average.gte=${voite}`;
    return changeState(link);
  };

  const changeState = (link: string) => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setMovies(data.results));
      });
  };

  return <MovieList movies={movies} />;
}
