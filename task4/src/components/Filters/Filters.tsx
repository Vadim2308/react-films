import React from 'react';
import SortBy from './SortBy';
import { ReleaseYear } from './ReleaseYear';
import Genres from './Genres';
import classes from 'styles/filters.module.scss';
import { IFilters, TGenre } from 'types/global';

type TProps = {
  filters: IFilters;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setGenre: (data: TGenre[]) => void;
  handleChangeGanre: (id: string) => void;
};

class Filters extends React.Component<TProps> {
  render() {
    const {
      filters: { sort_by, year, genres },
      onChangeFilter,
      setGenre,
      handleChangeGanre,
    } = this.props;
    return (
      <div className={classes.filters}>
        <SortBy sort_by={sort_by} onChangeFilter={onChangeFilter} />
        <ReleaseYear year={year} onChangeFilter={onChangeFilter} />
        <Genres genres={genres} setGenre={setGenre} handleChangeGanre={handleChangeGanre} />
      </div>
    );
  }
}

export default Filters;
