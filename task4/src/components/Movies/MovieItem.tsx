import altImg from 'assests/images/movieItem/alt.jpg';
import classes from 'styles/movies.module.scss';
import { TMovie } from 'types/global';

type TProps = {
  movie: TMovie;
};

const MovieItem = ({ movie }: TProps) => {
  const { title, backdrop_path, poster_path, vote_average, release_date, popularity } = movie;
  let poster = `https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`;
  if (poster === `https://image.tmdb.org/t/p/w500null`) {
    poster = `${altImg}`;
  }
  return (
    <div className={classes.movie}>
      <div className={classes.movie__inner}>
        <img className={classes.img} src={poster}></img>
        <h2 className={classes.title}>{title}</h2>
        <div className={classes.active}>
          <div className={classes.active_inner}>
            <h5 className={classes.active_inner__rating}>
              Оценка: <span className={classes.active_inner__span}>{vote_average}</span>
            </h5>
            <h5 className={classes.active_inner__release}>
              Релиз: {release_date ? release_date.substr(0, 4) : release_date}
            </h5>
            <h5 className={classes.active_inner__release}>
              Голосов: {popularity ? Math.round(popularity) : popularity}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
