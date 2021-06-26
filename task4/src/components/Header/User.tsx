import avatar from 'assests/images/header/avatar.png';
import classes from 'styles/header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { onlogOut } from 'redux/appSlice';
import { IAppState } from 'types/global';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const User: React.FC = () => {
  const username = useSelector((state: IAppState) => state.App.user?.username);
  const dispatch = useDispatch();

  const handlerLogOut = () => {
    cookies.remove('session_id');
    dispatch(onlogOut());
  };
  return (
    <div className={classes.user}>
      <div className={classes.user_inner}>
        <img className={classes.user_inner__img} src={avatar} alt="" />
        <h3 className={classes.user_inner__title}>{username}</h3>
      </div>
      <button onClick={handlerLogOut} className={classes.btn_exit}>
        Выйти
      </button>
    </div>
  );
};

export default User;
