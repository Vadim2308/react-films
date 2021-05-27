import React from 'react';
import { API_URL, API_KEY_STORE_FILM } from '../../api/api';
import classes from '../../styles/filters.module.scss';
import dropDownIcon from '../../assests/images/filters/down-arrow.svg';
import selectIcon from '../../assests/images/filters/selected.svg';

type TState = {
  visiblePopup: boolean;
  rotatedArrow: boolean;
};

type TProps = {
  getGenre: (data: any) => void;
  genres: Array<any>;
  handleChangeGanre: (genre: string) => void;
};

class Genres extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    this.state = {
      visiblePopup: false,
      rotatedArrow: false,
    };
  }

  getGenres = () => {
    const link = `${API_URL}/genre/movie/list?api_key=${API_KEY_STORE_FILM}&language=Ru-ru`;
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        return this.props.getGenre(data);
      });
  };

  componentDidMount() {
    return this.getGenres();
  }

  handleClick = (event: any) => {
    if (event.target.dataset.set === 'input') {
      this.setState(() => {
        return {
          visiblePopup: !this.state.visiblePopup,
          rotatedArrow: !this.state.rotatedArrow,
        };
      });
    }
  };

  clickCheckBox = (event: any) => {
    this.props.handleChangeGanre(event);
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
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return (
              <li key={genre.id} className={classes.genre_element}>
                <label className={classes.genre_item}>
                  <input
                    onClick={this.clickCheckBox.bind(null)}
                    id={genre.id}
                    value={genre.name}
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
