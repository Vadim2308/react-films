import classes from 'styles/movies.module.scss';
import React from 'react';

type TState = {
  loading: boolean;
};

export default class Page404 extends React.Component<{}, TState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true });
    }, 1000);
  }

  render() {
    if (this.state.loading) {
      return (
        <div className={classes.error}>
          <h1 className={classes.error__title}>
            УПС :( Ничего не найдено...попробуйте изменить настройки фильтра и повторите снова.
          </h1>
        </div>
      );
    } else {
      return null;
    }
  }
}
