import React from 'react';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import classes from 'styles/header.module.scss';

export default class Login extends React.Component {
  sendPromises = async () => {
    const fetchApi = (url: any, options = {}) => {
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
            response.json().then((error: any) => {
              reject(error);
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
          username: 'Vadim2308',
          password: 'PQD@SyK5wFeptKX',
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
    console.log(session_id);
  };

  render() {
    return (
      <div className={classes.login}>
        <button onClick={this.sendPromises} className={classes.login__btn} type="button">
          Войти
        </button>
      </div>
    );
  }
}
