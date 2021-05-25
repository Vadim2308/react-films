import React from 'react';
import classes from '../../styles/movies.module.scss';

type TProps = {
  movie: {
    key: number;
    title: string;
    backdrop_path: string;
    poster_path: string;
    vote_average: string;
    release_date: string;
    popularity: number;
  };
};
export default class MovieItem extends React.Component<TProps> {
  render() {
    const { title, backdrop_path, poster_path, vote_average, release_date, popularity } =
      this.props.movie;
    return (
      <div className={classes.movie}>
        <div className={classes.movie__inner}>
          <img
            className={classes.img}
            src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}
            alt="row"></img>
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
  }
}
