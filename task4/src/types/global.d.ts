declare module '*.scss';

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
  movies: TMovie[];
  length: number;
  map: (movie) => {};
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
