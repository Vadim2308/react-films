import React from 'react';
import SortBy from './SortBy';
import ReleaseYear from './ReleaseYear';
import classes from '../../styles/filters.module.scss';

type TProps = {
  filters: {
    sort_by: string;
    year: string;
  };
  onChangeFilter: (event: any) => void;
};

class Filters extends React.Component<TProps> {
  render() {
    const {
      filters: { sort_by, year },
      onChangeFilter,
    } = this.props;
    return (
      <div className={classes.filters}>
        <SortBy sort_by={sort_by} onChangeFilter={onChangeFilter} />
        <ReleaseYear year={year} onChangeFilter={onChangeFilter} />
      </div>
    );
  }
}

export default Filters;
