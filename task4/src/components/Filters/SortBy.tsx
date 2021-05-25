import classes from '../../styles/filters.module.scss';
import dropDownIcon from '../../assests/images/filters/down-arrow.svg';

type TProps = {
  sort_by: string;
  onChangeFilter: (event: any) => void;
};

const SortBy = ({ sort_by, onChangeFilter }: TProps) => {
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

  return (
    <form action="">
      <img className={classes.sort_img} src={dropDownIcon}></img>
      <select
        id="sort_by"
        className={classes.sorting}
        value={sort_by}
        onChange={onChangeFilter}
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
