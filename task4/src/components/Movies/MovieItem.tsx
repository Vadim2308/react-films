import React from 'react';
import classes from '../../styles/movies.module.scss';

type TProps = {
  key: number;
  movie: any;
  title: string;
  backdrop_path: string;
  poster_path: string;
};

export default class MovieItem extends React.Component<{ movie: TProps }> {
  constructor(props: TProps) {
    super(props);
  }
  render() {
    const { title, backdrop_path, poster_path } = this.props.movie;
    console.log(this.props.movie.backdrop_path);
    return (
      <div className={classes.movie}>
        <div className={classes.movie__inner}>
          <img
            className={classes.img}
            src={`https://image.tmdb.org/t/p/w500${poster_path || backdrop_path}`}></img>
          <h4 className={classes.title}>{title}</h4>
        </div>
      </div>
    );
  }
}
