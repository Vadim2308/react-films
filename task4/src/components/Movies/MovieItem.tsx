import React from 'react';
import classes from '../../styles/movies.module.scss';

type TProps = {
  key: number;
  movie: any;
  title: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: string;
};

export default class MovieItem extends React.Component<{ movie: TProps }> {
  constructor(props: TProps) {
    super(props);
  }
  render() {
    const { title, backdrop_path, poster_path, vote_average } = this.props.movie;
    console.log(this.props.movie);
    return (
      <div className={classes.movie}>
        <div className={classes.movie__inner}>
          <img
            className={classes.img}
            src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}></img>
          <h2 className={classes.title}>{title}</h2>
        </div>
      </div>
    );
  }
}
