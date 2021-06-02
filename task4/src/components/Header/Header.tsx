import Login from 'components/Header/Login';
import User from 'components/Header/User';
import classes from 'styles/header.module.scss';

interface IProps {
  updateUser: (user: any) => void;
  updateSessionId: (session_id: any) => void;
  user?: null;
}

const Header = ({ updateUser, user, updateSessionId }: IProps) => {
  return (
    <nav className={classes.header}>
      <div className={classes.header__inner}>
        {/* <ul>
          <li>
            <a>На главную</a>
            <a>Фильмы</a>
          </li>
        </ul> */}
        {user ? (
          <User user={user} />
        ) : (
          <Login updateUser={updateUser} updateSessionId={updateSessionId} />
        )}
      </div>
    </nav>
  );
};

export default Header;
