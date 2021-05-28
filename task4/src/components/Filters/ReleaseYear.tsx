import { useState } from 'react';
import classes from 'styles/filters.module.scss';
import dropDownIcon from 'assests/images/filters/down-arrow.svg';

type TProps = {
  year: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const releases = [
  {
    label: '2021',
    value: '2021',
  },
  {
    label: '2020',
    value: '2020',
  },
  {
    label: '2019',
    value: '2019',
  },
  {
    label: '2018',
    value: '2018',
  },
  {
    label: '2000-2017',
    value: '2000-2017',
  },
  {
    label: '1980-1999',
    value: '1980-1999',
  },
  {
    label: '1950-1979',
    value: '1950-1979',
  },
];

const ReleaseYear = ({ year, onChangeFilter }: TProps) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const toggleVisiblePopup = (): void => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div className={classes.release_year}>
      <form action="">
        <img
          className={visiblePopup ? classes.year_img : classes.year_img__active}
          src={dropDownIcon}></img>
        <select
          id="year"
          className={classes.sorting__year}
          value={year}
          onClick={toggleVisiblePopup.bind(null)}
          onChange={(event) => onChangeFilter(event)}
          name="year">
          <option disabled>Год:</option>
          {releases.map((element) => {
            return (
              <option key={element.value} value={element.value}>
                {element.label}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
};

export { ReleaseYear };
