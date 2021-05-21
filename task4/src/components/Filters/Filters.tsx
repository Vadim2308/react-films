import React from 'react';
import classes from '../../styles/filters.module.scss';
import filterIcon from '../../assests/images/Filters/filter.svg';

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
        <div className={classes.filters_item}>
          <img className={classes.filters_item__img} src={filterIcon} alt="32d3d" />
          <h3 className={classes.filters_item__title}>Фильтры:</h3>
        </div>
        <form action="">
          <label className={classes.filters__sort_by} htmlFor="sort_by">
            Сортировать:
          </label>
          <select
            id="sort_by"
            className={classes.sorting}
            value={sort_by}
            onChange={onChangeFilter}
            name="sort_by">
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
