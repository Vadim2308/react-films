declare module '*.scss';
declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject;

export type TGenre = {
  id: number;
  name: string;
};

export interface IFilters {
  sort_by: string;
  year: string;
  genres: TGenre[];
  filteredGenre: string[];
  voite: string;
}

export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface IFilms {
  Movies: {
    movies: TMovie[];
  };
}

export type IAppState = {
  App: {
    user: TUser | null;
    session_id: null | string;
    page: number;
    filters: IFilters;
  };
};

export interface ILoginState {
  Login: {
    username: string;
    password: string;
    errors: {
      username?: string;
      password?: string;
      invalid?: string;
    };
    buttonDisable: boolean;
  };
}

export type TUser = {
  avatar: {
    gravatar: {
      hash: string;
    };
  };
  tmdb?: { avatar_path: null | string };
  id: number;
  include_adult: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  username: string;
};
