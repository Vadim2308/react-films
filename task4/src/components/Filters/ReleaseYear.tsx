import React from 'react';
import classes from '../../styles/filters.module.scss';
import dropDownIcon from '../../assests/images/filters/down-arrow.svg';

type TProps = {
  year: string;
  onChangeFilter: (event: any) => void;
};

const ReleaseYear = ({ year, onChangeFilter }: TProps) => {
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
  ];

  return (
    <form action="">
      <img className={classes.year_img} src={dropDownIcon}></img>
      <select
        id="year"
        className={classes.sorting__year}
        value={year}
        onChange={onChangeFilter}
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
  );
};

export default ReleaseYear;
