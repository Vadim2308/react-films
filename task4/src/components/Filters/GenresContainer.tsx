import React from 'react';
import Genres from './Genres';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { TGenre } from 'types/global';
import { useEffect } from 'react';
import { downloadGenreFromApi, changeGenre } from 'redux/appSlice';
import { useDispatch } from 'react-redux';

interface IProps {
  genres: TGenre[];
  filteredGenre: string[];
}

const GenresContainer: React.FC<IProps> = ({ genres, filteredGenre }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = (): void => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_STORE_FILM}&language=ru-RU`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        return dispatch(downloadGenreFromApi(data.genres));
      });
  };

  const handleChangeGenre = (id: string) => {
    let newGenre: string[] = [];
    if (filteredGenre.includes(id)) {
      newGenre = filteredGenre.filter((el: string) => el !== id);
    } else {
      newGenre.push(...filteredGenre, id);
    }
    return dispatch(changeGenre(newGenre));
  };

  const clickCheckBox: React.MouseEventHandler<HTMLInputElement> = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ): void => {
    const id: string = event.currentTarget.value;
    handleChangeGenre(id);
  };

  return <Genres genres={genres} clickCheckBox={clickCheckBox} />;
};

export default GenresContainer;
