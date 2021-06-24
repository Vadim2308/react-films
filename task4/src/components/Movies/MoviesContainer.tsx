import React from 'react';
import MovieList from './MovieList';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { IFilters, IFilms } from 'types/global';
import { connect } from 'react-redux';
import { setMovies } from 'redux/actions/setMovies';

type TProps = {
  movies: [] | IFilms;
  page: number;
  filters: IFilters;
  setMovies: (data: IFilms) => void;
};

class MoviesContainer extends React.Component<TProps> {
  constructor(props: TProps) {
    super(props);
  }

  componentDidMount() {
    this.getMovies();
  }

  getMovies = () => {
    const {
      page,
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
        this.props.setMovies(data.results);
      });
  };

  componentDidUpdate(prevProps: TProps) {
    if (prevProps.page !== this.props.page) {
      this.getMovies();
    }
    if (prevProps.filters !== this.props.filters) {
      this.getMovies();
    }
  }

  render() {
    const { movies } = this.props;
    return <MovieList movies={movies} />;
  }
}

type TMoviesFromProps = {
  movies: [] | IFilms;
};

interface IMapStateToProps {
  moviesState: TMoviesFromProps;
}

function mapStateToProps(state: IMapStateToProps) {
  return {
    movies: state.moviesState.movies,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    setMovies: (movies: IFilms) => dispatch(setMovies(movies)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
