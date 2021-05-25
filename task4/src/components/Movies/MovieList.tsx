import React from 'react';
import MovieItem from './MovieItem';
import { API_URL, API_KEY_3 } from '../../api/api';
import classes from '../../styles/movies.module.scss';

type TProps = {
  page: number;
  filters: {
    sort_by: string;
    year: string;
  };
};

type TState = {
  movies: Array<any>;
};

export default class MovieList extends React.Component<TProps, TState> {
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
      filters: { sort_by, year },
    } = this.props;
    if (year.length > 4) {
      const firstDate = year.slice(0, 4);
      const secondDate = year.slice(5, 10);
      const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru=RU&sort_by=${sort_by}&page=${page}&primary_release_date.gte=${firstDate}-01-01&primary_release_date.lte=${secondDate}-01-01`;
      return this.changeState(link);
    }
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru=RU&sort_by=${sort_by}&page=${page}&primary_release_year=${year}`;
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
    console.log(this.state);
    const { movies } = this.state;
    return (
      <div className={classes.movies}>
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </div>
    );
  }
}
