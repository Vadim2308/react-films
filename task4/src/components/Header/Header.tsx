import LoginModal from 'components/Header/LoginModal';
import User from 'components/Header/User';
import classes from 'styles/header.module.scss';
import { TUser } from 'types/global';

interface IProps {
  user: TUser | null;
}

const Header = ({ user }: IProps) => {
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
