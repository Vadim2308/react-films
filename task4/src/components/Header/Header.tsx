import classes from 'styles/header.module.scss';
import Login from 'components/Header/Login';

function Header() {
  return (
    <nav className={classes.header}>
      <div className={classes.header__inner}>
        {/* <ul>
          <li>
            <a>На главную</a>
            <a>Фильмы</a>
          </li>
        </ul> */}
        <Login />
      </div>
    </nav>
  );
}

export default Header;
