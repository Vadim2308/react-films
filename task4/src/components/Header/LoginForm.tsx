import classes from 'styles/header.module.scss';

const LoginForm = () => {
  return (
    <div className={classes.modal}>
      <form>
        <h2>Autorization</h2>
        <input className={classes.input} type="text" />
        <input className={classes.input} type="password" />
        <button className={classes.input} type="submit">
          Войти
        </button>

        <h3>Здесь будет поле для авторизации</h3>
      </form>
    </div>
  );
};

export default LoginForm;
