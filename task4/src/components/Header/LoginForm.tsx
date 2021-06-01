import React from 'react';
import classes from 'styles/header.module.scss';

interface IState {
  username: string;
  password: string;
  errors: {
    username: string;
    password: string;
  };
}

export default class LoginForm extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {
        username: '',
        password: '',
      },
    };
  }

  changeInput = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
        errors: {
          username: '',
          password: '',
        },
      };
    });
  };

  validatingInputs = () => {
    const errors = { username: '', password: '' };
    if (this.state.username === '') {
      errors.username = 'Слишком короткое имя';
    }
    if (this.state.username === '') {
      errors.password = 'Слишком короткий пароль';
    }
    console.log('errors', errors);
    return errors;
  };

  handleLogin = (event: any) => {
    event.preventDefault();
    const errors = this.validatingInputs();
  };

  onBlure = () => {
    const errors = this.validatingInputs();
    if (Object.keys(errors).length > 0) {
      this.setState((prevState) => {
        return {
          ...prevState,
          errors: errors,
        };
      });
    }
  };

  render() {
    console.log(this.state);
    const { username, password, errors } = this.state;
    return (
      <div className={classes.modal}>
        <form className={classes.login_form}>
          <h2 className={classes.modal__title}>Авторизация</h2>
          <div className={classes.form_inputs}>
            <label className={classes.input__title} htmlFor="user">
              Пользователь
            </label>
            <input
              name="username"
              onChange={this.changeInput.bind(null)}
              value={username}
              className={classes.input}
              type="text"
              placeholder="Введите логин"
              onBlur={this.onBlure.bind(null)}
            />
            {errors.username && <div className={classes.warning}>{errors.username}</div>}
            <label className={classes.input__title} htmlFor="password">
              Пароль
            </label>
            <input
              name="password"
              onChange={this.changeInput.bind(null)}
              onBlur={this.onBlure.bind(null)}
              value={password}
              className={classes.input}
              type="password"
              placeholder="Введите пароль"
            />
            {errors.password && <div className={classes.warning}>{errors.password}</div>}
          </div>
          <button
            onClick={this.handleLogin.bind(null)}
            className={classes.input__btn}
            type="submit">
            Войти
          </button>
        </form>
      </div>
    );
  }
}
