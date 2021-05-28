import classes from 'styles/filters.module.scss';
import dropDownIcon from 'assests/images/filters/down-arrow.svg';
import { useState } from 'react';

const options = [
  {
    label: 'Любая оценка',
    value: '',
  },
  {
    label: 'Больше 9',
    value: '9',
  },
  {
    label: 'Больше 8',
    value: '8',
  },
  {
    label: 'Больше 7',
    value: '7',
  },
  {
    label: 'Больше 6',
    value: '6',
  },
];

type TProps = {
  voite: string;
  onChangeFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const VoiteAverage = ({ voite, onChangeFilter }: TProps) => {
  const [visiblePopup, setVisiblePopup] = useState(true);
  const toggleVisiblePopup: React.MouseEventHandler<HTMLSelectElement> = () => {
    setVisiblePopup(!visiblePopup);
  };

  return (
    <div className={classes.sort_by}>
      <form action="">
        <img
          className={visiblePopup ? classes.sort_img : classes.sort_img__active}
          src={dropDownIcon}></img>
        <select
          id="voite"
          className={classes.sorting}
          value={voite}
          onClick={toggleVisiblePopup.bind(null)}
          onChange={(event) => onChangeFilter(event)}
          name="voite">
          <option disabled>Оценка:</option>
          {options.map((element) => {
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

export default VoiteAverage;
