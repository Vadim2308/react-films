export const API_KEY_STORE_FILM = '0ca0bac22533bd7e46bf178075f5548c';
export const API_KEY_4 =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2EwYmFjMjI1MzNiZDdlNDZiZjE3ODA3NWY1NTQ4YyIsInN1YiI6IjYwYTUwYmNiNGIwYzYzMDA0MTVjMjUwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w6mjzSxEj4W8SsQSjhqZhyKHCS1mWXpCVmcA4u3NUmU';
export const API_URL = 'https://api.themoviedb.org/3';

export const userFromCookies = (url: any, options = {}) => {
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
        console.log(data);
        resolve(data);
      });
  });
};

// st1mpro23@yandex.ru
// Vadim2308
// PQD@SyK5wFeptKX
