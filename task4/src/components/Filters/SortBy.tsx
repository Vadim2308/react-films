import classes from 'styles/filters.module.scss';
import dropDownIcon from 'assests/images/filters/down-arrow.svg';
import { useState } from 'react';

type TProps = {
  sort_by: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const options = [
  {
    label: 'Популярные по убыванию',
    value: 'popularity.desc',
  },
  {
    label: 'Популярные по возрастанию',
    value: 'popularity.asc',
  },
  {
    label: 'Рейтинг по убыванию',
    value: 'vote_average.desc',
  },
  {
    label: 'Рейтинг по возрастанию',
    value: 'vote_average.asc',
  },
];

const SortBy = ({ sort_by, onChangeFilter }: TProps) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const toggleVisiblePopup: React.MouseEventHandler<HTMLSelectElement> = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <form action="">
      <img
        className={visiblePopup ? classes.sort_img : classes.sort_img__active}
        src={dropDownIcon}></img>
      <select
        id="sort_by"
        className={classes.sorting}
        value={sort_by}
        onClick={toggleVisiblePopup.bind(null)}
        onChange={(event) => onChangeFilter(event)}
        name="sort_by">
        <option disabled>Сортировать:</option>
        {options.map((element) => {
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

export default SortBy;
