import React, { ReactChild } from 'react';
import classes from '../../styles/filters.module.scss';
import filterIcon from '../../assests/images/filters/filter.svg';
import dropDownIcon from '../../assests/images/filters/down-arrow.svg';

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
        <form action="">
          <img className={classes.sort_img} src={dropDownIcon}></img>
          <select
            id="sort_by"
            className={classes.sorting}
            value={sort_by}
            onChange={onChangeFilter}
            name="sort_by">
            <option selected disabled>
              Сортировать:
            </option>
            <option value="popularity.desc">Популярные по убыванию</option>
            <option value="popularity.asc">Популярные по возрастанию</option>
            <option value="vote_average.desc">Рейтинг по убыванию</option>
            <option value="vote_average.asc">Рейтинг по возрастанию</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Filters;
