import React from 'react';
import classes from '../../styles/movies.module.scss';

type TProps = {
  key: number;
  movie: any;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
  release_date: string;
};

export default class MovieItem extends React.Component<{ movie: TProps }> {
  constructor(props: TProps) {
    super(props);
  }
  render() {
    const { title, backdrop_path, poster_path, vote_average, release_date } = this.props.movie;
    console.log(this.props.movie);
    return (
      <div className={classes.movie}>
        <div className={classes.movie__inner}>
          <img
            className={classes.img}
            src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}></img>
          <h2 className={classes.title}>{title}</h2>
          <div className={classes.active}>
            <h5 className={classes.active__rating}>{vote_average}</h5>
            <h5 className={classes.active__release}>{release_date}</h5>
          </div>
        </div>
      </div>
    );
  }
}
