import React from 'react';
import SortBy from './SortBy';
import ReleaseYear from './ReleaseYear';
import Genres from './Genres';
import classes from 'styles/filters.module.scss';

type TProps = {
  filters: {
    sort_by: string;
    year: string;
    genres: Array<any>;
  };
  onChangeFilter: (event: any) => void;
  getGenre: (event: any) => void;
  handleChangeGanre: (genre: string) => void;
};

class Filters extends React.Component<TProps> {
  render() {
    const {
      filters: { sort_by, year, genres },
      onChangeFilter,
      getGenre,
      handleChangeGanre,
    } = this.props;
    return (
      <div className={classes.filters}>
        <SortBy sort_by={sort_by} onChangeFilter={onChangeFilter} />
        <ReleaseYear year={year} onChangeFilter={onChangeFilter} />
        <Genres genres={genres} getGenre={getGenre} handleChangeGanre={handleChangeGanre} />
      </div>
    );
  }
}

export default Filters;
