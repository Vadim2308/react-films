import classes from 'styles/header.module.scss';

const LoginForm = () => {
  return (
    <div className={classes.modal}>
      <form className={classes.login_form}>
        <h2 className={classes.modal__title}>Авторизация</h2>
        <div className={classes.form_inputs}>
          <label className={classes.input__title} htmlFor="user">
            Пользователь
          </label>
          <input className={classes.input} type="text" placeholder="Введите логин" />
          <label className={classes.input__title} htmlFor="password">
            Пароль
          </label>
          <input className={classes.input} type="password" placeholder="Введите пароль" />
        </div>
        <button className={classes.input__btn} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
