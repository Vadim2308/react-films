import React from 'react';
import classes from '../../styles/pagination.module.scss';

type TProps = {
  page: number;
  onChangePage: any;
};

export default class Pagination extends React.Component<TProps> {
  render() {
    const { page, onChangePage } = this.props;
    return (
      <div className={classes.pagination}>
        <div className={classes.button}>
          <button
            disabled={page === 1}
            onClick={onChangePage.bind(null, page - 1)}
            className={classes.button__item}>
            Предыдущая страница
          </button>
          <button onClick={onChangePage.bind(null, page + 1)} className={classes.button__item}>
            Следующая страница
          </button>
        </div>
      </div>
    );
  }
}
