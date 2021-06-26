import classes from 'styles/App.module.scss';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import MoviesContainer from './Movies/MoviesContainer';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';
import { IAppState } from 'types/global';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { useEffect } from 'react';
import { updateUser } from 'redux/appSlice';

const cookies = new Cookies();

const App: React.FC = () => {
  const page = useSelector((state: IAppState) => state.App.page);
  const filters = useSelector((state: IAppState) => state.App.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    const session_id = cookies.get('session_id');
    if (session_id) {
      let userFromCookies = async () => {
        let response = await fetch(
          `${API_URL}/account?api_key=${API_KEY_STORE_FILM}&session_id=${session_id}`,
        );
        let user = await response.json();
        dispatch(updateUser(user));
      };
      userFromCookies();
    }
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Header />
        <Slider />
        <Filters filters={filters} />
        <div className={classes.main_inner}>
          <Pagination page={page} />
          <MoviesContainer page={page} filters={filters} />
        </div>
      </div>
    </div>
  );
};

export default App;
