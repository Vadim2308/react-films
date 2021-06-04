import React from 'react';
import MovieList from './MovieList';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import Page404 from './Page404';
import classes from 'styles/movies.module.scss';
import { IFilters, IFilms, TMovie } from 'types/global';

type TProps = {
  page: number;
  filters: IFilters;
};

type TState = IFilms;

export default class MoviesContainer extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.getMovies(this.props);
  }

  getMovies = ({ page }: TProps) => {
    const {
      filters: { sort_by, year, filteredGenre, voite },
    } = this.props;
    const currentGenre = filteredGenre.join(',');
    if (year.length > 4) {
      const firstDate = year.slice(0, 4);
      const secondDate = year.slice(5, 10);
      const link = `${API_URL}/discover/movie?api_key=${API_KEY_STORE_FILM}&language=ru=RU&sort_by=${sort_by}&page=${page}&primary_release_date.gte=${firstDate}-01-01&primary_release_date.lte=${secondDate}-01-01&vote_average.gte=${voite}`;
      return this.changeState(link);
    }
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_STORE_FILM}&language=ru=RU&sort_by=${sort_by}&page=${page}&primary_release_year=${year}&with_genres=${currentGenre}&vote_average.gte=${voite}`;
    return this.changeState(link);
  };

  changeState = (link: string) => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            movies: data.results,
          };
        });
      });
  };

  componentDidUpdate(prevProps: TProps) {
    if (prevProps !== this.props) {
      this.getMovies(this.props);
    }
  }

  render() {
    const { movies } = this.state;
    return <MovieList movies={movies} />;
  }
}
