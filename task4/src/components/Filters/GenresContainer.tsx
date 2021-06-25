import React from 'react';
import Genres from './Genres';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { TGenre } from 'types/global';
import { useState, useEffect } from 'react';
import { downloadGenreFromApi, changeGenre } from 'redux/appSlice';
import { useDispatch } from 'react-redux';

type TState = {
  visiblePopup: boolean;
  rotatedArrow: boolean;
};

interface IProps {
  genres: TGenre[];
  filteredGenre: string[];
}

const GenresContainer: React.FC<IProps> = ({ genres, filteredGenre }) => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [rotatedArrow, setRotatedArrow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    return getGenres();
  }, []);

  const getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_STORE_FILM}&language=ru-RU`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        return dispatch(downloadGenreFromApi(data.genres));
      });
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    if (event.currentTarget.dataset.set === 'input') {
      setVisiblePopup(!visiblePopup);
      setRotatedArrow(!rotatedArrow);
    }
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

  return (
    <Genres
      genres={genres}
      visiblePopup={visiblePopup}
      rotatedArrow={rotatedArrow}
      handleClick={handleClick}
      clickCheckBox={clickCheckBox}
    />
  );
};

export default GenresContainer;
