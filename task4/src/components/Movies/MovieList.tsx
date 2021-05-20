import React from 'react';
import MovieItem from './MovieItem';
import { API_URL, API_KEY_3 } from '../../api/api';
import classes from '../../styles/movies.module.scss';

type TProps = {
  filters: {
    sort_by: string;
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

  componentDidMount(): void {
    const sort_by = this.props.filters.sort_by;
    const link = `${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru=RU&sort_by=${sort_by}`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            movies: data.results,
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
