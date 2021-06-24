import classes from 'styles/pagination.module.scss';
import prevPageIcon from 'assests/images/pagination/left-arrow.svg';
import nextPageIcon from 'assests/images/pagination/right-arrow.svg';
import { useDispatch } from 'react-redux';
import { changePage } from 'redux/appSlice';

type TProps = {
  page: number;
};

export default function Pagination({ page }: TProps) {
  const dispatch = useDispatch();

  const handleChangePage = (page: number) => {
    if (page < 1) {
      dispatch(changePage(1));
      return;
    }
    return dispatch(changePage(page));
  };

  return (
    <>
      <img
        className={classes.prevPage}
        src={prevPageIcon}
        onClick={() => handleChangePage(page - 1)}></img>
      <img
        className={classes.nextPage}
        src={nextPageIcon}
        onClick={() => handleChangePage(page + 1)}></img>
    </>
  );
}
