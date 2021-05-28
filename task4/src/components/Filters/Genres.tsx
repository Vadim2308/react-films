import React from 'react';
import { API_URL, API_KEY_STORE_FILM } from 'api/api';
import classes from 'styles/filters.module.scss';
import dropDownIcon from 'assests/images/filters/down-arrow.svg';
import selectIcon from 'assests/images/filters/selected.svg';
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

class Genres extends React.Component<IProps, TState> {
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

  handleClick: React.MouseEventHandler<HTMLDivElement> = (event): void => {
    if (event.currentTarget.dataset.set === 'input') {
      this.setState(() => {
        return {
          visiblePopup: !this.state.visiblePopup,
          rotatedArrow: !this.state.rotatedArrow,
        };
      });
    }
  };

  clickCheckBox: React.MouseEventHandler<HTMLInputElement> = (event): void => {
    const id: string = event.currentTarget.value;
    this.props.handleChangeGanre(id);
  };

  render() {
    const { visiblePopup, rotatedArrow } = this.state;
    const { genres } = this.props;
    return (
      <div data-set="input" className={classes.genre} onClick={this.handleClick}>
        <div data-set="input" className={classes.genre_header}>
          <h2 data-set="input" className={classes.genre_header__title}>
            Жанры
          </h2>
          <img
            data-set="input"
            className={rotatedArrow ? classes.genre_img__active : classes.genre_img}
            src={dropDownIcon}></img>
        </div>
        <ul className={visiblePopup ? classes.genre_inner__active : classes.genre_inner}>
          {genres.map((genre) => {
            let name = genre.name;
            let id = genre.id;
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return (
              <li key={genre.id} className={classes.genre_element}>
                <label className={classes.genre_item}>
                  <input
                    onClick={this.clickCheckBox}
                    value={id}
                    className={classes.input}
                    type="checkbox"
                  />
                  <h3 className={classes.title}>{name}</h3>
                  <img className={classes.item_img} src={selectIcon}></img>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Genres;
