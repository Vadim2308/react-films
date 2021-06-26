import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import classes from 'styles/header.module.scss';
import { ILoginState } from 'types/global';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeInput,
  setActiveButtonLogin,
  setErrorsInState,
  setErrorAfterInvalidLogin,
} from 'redux/loginSlice';
import { setSessionId, updateUser } from 'redux/appSlice';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const LoginForm: React.FC = () => {
  const username = useSelector((state: ILoginState) => state.Login.username);
  const password = useSelector((state: ILoginState) => state.Login.password);
  const errors = useSelector((state: ILoginState) => state.Login.errors);
  const buttonDisable = useSelector((state: ILoginState) => state.Login.buttonDisable);

  const dispatch = useDispatch();

  const LoginUser = async () => {
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
              dispatch(setErrorAfterInvalidLogin());
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
          username: username,
          password: password,
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
    updateSessionId(session_id);
    const user: any = await fetchApi(
      `${API_URL}/account?api_key=${API_KEY_STORE_FILM}&session_id=${session_id}`,
    );
    dispatch(updateUser(user));
  };

  const updateSessionId = (session_id: string) => {
    cookies.set('session_id', session_id, { path: '/', maxAge: 604800 });
    dispatch(setSessionId(session_id));
  };

  const handlerChangeInput: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return dispatch(changeInput({ name, value }));
  };

  const validatingInputs = () => {
    const errors = { username: '', password: '' };
    if (username === '') {
      errors.username = 'Слишком короткое имя';
    }
    if (password === '') {
      errors.password = 'Слишком короткий пароль';
    }
    return errors;
  };

  const handleLogin: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const errors = validatingInputs();
    if (errors.username === '' && errors.password === '') {
      dispatch(setActiveButtonLogin());
      LoginUser();
    } else {
      return;
    }
  };

  const onBlure = () => {
    const errors = validatingInputs();
    if (Object.keys(errors).length > 0) {
      return dispatch(setErrorsInState(errors));
    }
  };
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
            onChange={handlerChangeInput.bind(null)}
            value={username}
            className={classes.input}
            type="text"
            placeholder="Введите логин"
            onBlur={onBlure.bind(null)}
          />
          {errors.username && <div className={classes.warning}>{errors.username}</div>}
          <label className={classes.input__title} htmlFor="password">
            Пароль
          </label>
          <input
            name="password"
            onChange={handlerChangeInput.bind(null)}
            onBlur={onBlure.bind(null)}
            value={password}
            className={classes.input}
            type="password"
            placeholder="Введите пароль"
          />
          {errors.password && <div className={classes.warning}>{errors.password}</div>}
        </div>
        <button
          onClick={handleLogin.bind(null)}
          className={buttonDisable ? classes.input__btn__opacity : classes.input__btn}
          disabled={buttonDisable}
          type="submit">
          Войти
        </button>
        {errors.invalid && <div className={classes.warning__user}>{errors.invalid}</div>}
      </form>
    </div>
  );
};

export default LoginForm;
