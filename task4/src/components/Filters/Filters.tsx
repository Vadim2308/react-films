import React from 'react';
import SortBy from './SortBy';
import { ReleaseYear } from './ReleaseYear';
import GenresContainer from './GenresContainer';
import VoiteAverage from './VoiteAverage';
import ResetFilters from './ResetFilters';
import classes from 'styles/filters.module.scss';
import { IFilters, TGenre } from 'types/global';

type TProps = {
  filters: IFilters;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  setGenre: (data: TGenre[]) => void;
  handleChangeGanre: (id: string) => void;
  resetState: () => void;
};

class Filters extends React.Component<TProps> {
  render() {
    const {
      filters: { sort_by, year, genres, voite },
      onChangeFilter,
      setGenre,
      handleChangeGanre,
      resetState,
    } = this.props;
    return (
      <form>
        <div className={classes.filters}>
          <SortBy sort_by={sort_by} onChangeFilter={onChangeFilter} />
          <ReleaseYear year={year} onChangeFilter={onChangeFilter} />
          <GenresContainer
            genres={genres}
            setGenre={setGenre}
            handleChangeGanre={handleChangeGanre}
          />
          <VoiteAverage voite={voite} onChangeFilter={onChangeFilter} />
          <ResetFilters resetState={resetState} />
        </div>
      </form>
    );
  }
}

export default Filters;
