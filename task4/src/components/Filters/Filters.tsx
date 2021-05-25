import React from 'react';
import SortBy from './SortBy';
import classes from '../../styles/filters.module.scss';

type TProps = {
  filters: {
    sort_by: string;
  };
  onChangeFilter: any;
};

class Filters extends React.Component<TProps> {
  render() {
    const {
      filters: { sort_by },
      onChangeFilter,
    } = this.props;
    return (
      <div className={classes.filters}>
        <SortBy sort_by={sort_by} onChangeFilter={onChangeFilter} />
      </div>
    );
  }
}

export default Filters;
