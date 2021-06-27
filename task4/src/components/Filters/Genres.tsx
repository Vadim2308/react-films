import React from 'react';
import classes from 'styles/filters.module.scss';
import dropDownIcon from 'assests/images/filters/down-arrow.svg';
import selectIcon from 'assests/images/filters/selected.svg';
import { TGenre } from 'types/global';

interface IProps {
  genres: TGenre[];
  clickCheckBox: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const Genres: React.FC<IProps> = ({ clickCheckBox, genres }) => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const [rotatedArrow, setRotatedArrow] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.body.addEventListener('click', outSideClick);
  }, []);

  const genresRef = React.useRef<HTMLDivElement>(null);

  const outSideClick = (event: Event): void => {
    const array = event.composedPath();
    const elem = genresRef.current;
    if (elem && !array.includes(elem)) {
      setVisiblePopup(false);
      setRotatedArrow(false);
    }
  };

  const handleClick: React.MouseEventHandler<HTMLDivElement> = (event): void => {
    if (event.currentTarget.dataset.set === 'input') {
      setVisiblePopup(!visiblePopup);
      setRotatedArrow(!rotatedArrow);
    }
  };

  return (
    <div ref={genresRef} data-set="input" className={classes.genre} onClick={handleClick}>
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
                  name={name}
                  onClick={clickCheckBox}
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
};

export default Genres;
