import React from 'react';
import SortBy from './SortBy';
import { ReleaseYear } from './ReleaseYear';
import GenresContainer from './GenresContainer';
import VoiteAverage from './VoiteAverage';
import ResetFilters from './ResetFilters';
import classes from 'styles/filters.module.scss';
import { IFilters, TGenre } from 'types/global';
import { setFilters } from 'redux/appSlice';
import { useDispatch } from 'react-redux';

type TProps = {
  filters: IFilters;
};

const Filters: React.FC<TProps> = (filters) => {
  const {
    filters: { sort_by, year, voite, genres, filteredGenre },
  } = filters;
  const dispatch = useDispatch();
  const onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    dispatch(setFilters({ name, value }));
  };
  return (
    <form>
      <div className={classes.filters}>
        <SortBy sort_by={sort_by} onChangeFilter={onChangeFilter} />
        <ReleaseYear year={year} onChangeFilter={onChangeFilter} />
        <GenresContainer genres={genres} filteredGenre={filteredGenre} />
        <VoiteAverage voite={voite} onChangeFilter={onChangeFilter} />
        <ResetFilters genres={genres} />
      </div>
    </form>
  );
};

export default Filters;
