import MovieItem from './MovieItem';
import classes from '../../styles/movies.module.scss';

export default function MovieList() {
  return (
    <div className={classes.movies}>
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  );
}
