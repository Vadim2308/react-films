import MovieItem from './MovieItem';
import Page404 from './Page404';
import classes from 'styles/movies.module.scss';
import { TMovie } from 'types/global';

type TProps = {
  movies: TMovie[];
};

const MovieList = ({ movies }: TProps) => {
  return (
    <div className={classes.movies}>
      {movies.length === 0 ? (
        <Page404 />
      ) : (
        movies.map((movie: TMovie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })
      )}
    </div>
  );
};

export default MovieList;
