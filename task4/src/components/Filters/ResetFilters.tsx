import classes from 'styles/filters.module.scss';
import ResetImg from 'assests/imagesComponents/reset';
import { resetState } from 'redux/appSlice';
import { useDispatch } from 'react-redux';
import { TGenre } from 'types/global';
type TProps = {
  genres: TGenre[];
};

const ResetFilters: React.FC<TProps> = ({ genres }) => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    return dispatch(
      resetState({
        page: 1,
        filters: {
          sort_by: 'popularity.desc',
          genres: genres,
          year: String(new Date().getFullYear()),
          filteredGenre: [],
          voite: '',
        },
      }),
    );
  };

  return (
    <div className={classes.reset}>
      <label className={classes.label}>
        <ResetImg />
        <input onClick={handleResetFilters} className={classes.reset__checkboxes} type="reset" />
        <h2 className={classes.reset__title}>Сбросить фильтры</h2>
      </label>
    </div>
  );
};

export default ResetFilters;
