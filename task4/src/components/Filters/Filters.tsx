import classes from '../../styles/filters.module.scss';

export default function Filters() {
  return (
    <div className={classes.filters}>
      <form action="">
        <label htmlFor="sort_by">Сортировать по:</label>
        <select className={classes.filter} id="sort_by">
          <option value="popularity.desc">Популярные по убыванию</option>
          <option value="popularity.asc">Популярные по возрастанию</option>
          <option value="vote_average.desc">Рейтинг по убыванию</option>
          <option value="vote_average.asc">Рейтинг по возрастанию</option>
        </select>
      </form>
    </div>
  );
}
