import MovieItem from './MovieItem';
import Page404 from './Page404';
import classes from 'styles/movies.module.scss';
import { IFilms } from 'types/global';

const MovieList = ({ movies }: IFilms) => {
  return (
    <div className={classes.movies}>
      {movies.length === 0 ? (
        <Page404 />
      ) : (
        movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })
      )}
    </div>
  );
};

export default MovieList;
