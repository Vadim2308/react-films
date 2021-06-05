import React from 'react';
import avatar from 'assests/images/header/avatar.png';
import classes from 'styles/header.module.scss';
import { AppContext } from '../App';

const User = () => {
  const context = React.useContext(AppContext);
  const username = context.user!.username;
  const onLogout = context.onLogOut;
  return (
    <div className={classes.user}>
      <div className={classes.user_inner}>
        <img className={classes.user_inner__img} src={avatar} alt="" />
        <h3 className={classes.user_inner__title}>{username}</h3>
      </div>
      <button onClick={onLogout} className={classes.btn_exit}>
        Выйти
      </button>
    </div>
  );
};

export default User;
