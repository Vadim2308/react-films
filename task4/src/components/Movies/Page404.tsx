import classes from '../../styles/movies.module.scss';

const Page404 = () => {
  return (
    <div className={classes.error}>
      <h1 className={classes.error__title}>
        УПС :( Ничего не найдено...попробуйте изменить настройки фильтра и повторите снова.
      </h1>
    </div>
  );
};

export default Page404;
