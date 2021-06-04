import React from 'react';
import Genres from './Genres';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import { TGenre } from 'types/global';

type TState = {
  visiblePopup: boolean;
  rotatedArrow: boolean;
};

interface IProps {
  genres: TGenre[];
  setGenre: (data: TGenre[]) => void;
  handleChangeGanre: (id: string) => void;
}

class GenresContainer extends React.Component<IProps, TState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      visiblePopup: false,
      rotatedArrow: false,
    };
  }

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_STORE_FILM}&language=ru-RU`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        return this.props.setGenre(data.genres);
      });
  };

  componentDidMount() {
    return this.getGenres();
  }

  handleClick: React.MouseEventHandler<HTMLDivElement> = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    if (event.currentTarget.dataset.set === 'input') {
      this.setState(() => {
        return {
          visiblePopup: !this.state.visiblePopup,
          rotatedArrow: !this.state.rotatedArrow,
        };
      });
    }
  };

  clickCheckBox: React.MouseEventHandler<HTMLInputElement> = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>,
  ): void => {
    const id: string = event.currentTarget.value;
    this.props.handleChangeGanre(id);
  };

  render() {
    return (
      <Genres
        {...this.props}
        {...this.state}
        handleClick={this.handleClick}
        clickCheckBox={this.clickCheckBox}
      />
    );
  }
}

export default GenresContainer;
