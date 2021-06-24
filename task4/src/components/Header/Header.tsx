import LoginModal from 'components/Header/LoginModal';
import User from 'components/Header/User';
import classes from 'styles/header.module.scss';
import { useSelector } from 'react-redux';
import { IFilters, IAppState, TUser } from 'types/global';

const Header = () => {
  const user = useSelector((state: IAppState) => state.App.user);
  return (
    <nav className={classes.header}>
      <div className={classes.header__inner}>
        {/* <ul>
          <li>
            <a>На главную</a>
            <a>Фильмы</a>
          </li>
        </ul> */}
        {user ? <User /> : <LoginModal />}
      </div>
    </nav>
  );
};

export default Header;
