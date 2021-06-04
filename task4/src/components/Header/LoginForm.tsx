import React from 'react';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import classes from 'styles/header.module.scss';
import { TUser } from 'types/global';
import { AppContext } from '../App';

interface IState {
  username: string;
  password: string;
  errors: {
    username?: string;
    password?: string;
    invalid?: string;
  };
  disable: boolean;
}

interface IProps {
  updateUser: (user: TUser) => void;
  updateSessionId: (session_id: string) => void;
}

class LoginForm extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      disable: false,
    };
  }

  LoginUser = async () => {
    const fetchApi = (url: string, options = {}) => {
      return new Promise((resolve, reject) => {
        fetch(url, options)
          .then((response) => {
            if (response.status < 400) {
              return response.json();
            } else {
              throw response;
            }
          })
          .then((data) => {
            resolve(data);
          })
          .catch((response) => {
            response.json().then(() => {
              this.setState((prevState) => {
                return {
                  ...prevState,
                  disable: false,
                  errors: {
                    invalid: 'Неверный логин и/или пароль.',
                  },
                };
              });
            });
          });
      });
    };
    const data: any = await fetchApi(
      `${API_URL}/authentication/token/new?api_key=${API_KEY_STORE_FILM}`,
    );

    const result: any = await fetchApi(
      `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY_STORE_FILM}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          request_token: data.request_token,
        }),
      },
    );
    const { session_id }: any = await fetchApi(
      `${API_URL}/authentication/session/new?api_key=${API_KEY_STORE_FILM}`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          request_token: result.request_token,
        }),
      },
    );
    this.props.updateSessionId(session_id);
    const user: any = await fetchApi(
      `${API_URL}/account?api_key=${API_KEY_STORE_FILM}&session_id=${session_id}`,
    );
    this.props.updateUser(user);
  };

  changeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
        errors: {},
      };
    });
  };

  validatingInputs = () => {
    const errors = { username: '', password: '' };
    if (this.state.username === '') {
      errors.username = 'Слишком короткое имя';
    }
    if (this.state.password === '') {
      errors.password = 'Слишком короткий пароль';
    }
    return errors;
  };

  handleLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const errors = this.validatingInputs();
    if (errors.username === '' && errors.password === '') {
      this.setState({ disable: true });
      this.LoginUser();
    } else {
      return;
    }
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
    const { username, password, errors, disable } = this.state;
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
            className={disable ? classes.input__btn__opacity : classes.input__btn}
            disabled={disable}
            type="submit">
            Войти
          </button>
          {errors.invalid && <div className={classes.warning__user}>{errors.invalid}</div>}
        </form>
      </div>
    );
  }
}

const LoginFormContainer = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        return (
          <LoginForm updateUser={context.updateUser} updateSessionId={context.updateSessionId} />
        );
      }}
    </AppContext.Consumer>
  );
};

export default LoginFormContainer;
