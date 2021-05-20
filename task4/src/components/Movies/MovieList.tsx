import React from 'react';
import MovieItem from './MovieItem';
import { API_URL, API_KEY_3 } from '../../api/api';
import classes from '../../styles/movies.module.scss';

type TProps = {
  props?: any;
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
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru=RU`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            movies: data.results.slice(0, 10),
          };
        });
      });
  }

  render() {
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
