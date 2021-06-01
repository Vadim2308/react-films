import React from 'react';
import avatar from 'assests/images/header/avatar.png';
import classes from 'styles/header.module.scss';

interface IProps {
  user: any;
}

export default class User extends React.Component<IProps> {
  render() {
    const { user } = this.props;
    console.log(user);
    return (
      <div className={classes.user}>
        <div className={classes.user_inner}>
          <img className={classes.user_inner__img} src={avatar} alt="" />
          <h3 className={classes.user_inner__title}>Привет, {user.username}!</h3>
        </div>
        <button className={classes.btn_exit}>Выйти</button>
      </div>
    );
  }
}
