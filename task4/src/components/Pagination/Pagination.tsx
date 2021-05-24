import React from 'react';
import classes from '../../styles/pagination.module.scss';
import prevPageIcon from '../../assests/images/pagination/left-arrow.svg';
import nextPageIcon from '../../assests/images/pagination/right-arrow.svg';

type TProps = {
  page: number;
  onChangePage: (page: number) => void;
};

export default class Pagination extends React.Component<TProps> {
  render() {
    const { page, onChangePage } = this.props;
    return (
      <>
        <img
          className={classes.prevPage}
          src={prevPageIcon}
          onClick={onChangePage.bind(null, page - 1)}></img>
        <img
          className={classes.nextPage}
          src={nextPageIcon}
          onClick={onChangePage.bind(null, page + 1)}></img>
      </>
    );
  }
}
