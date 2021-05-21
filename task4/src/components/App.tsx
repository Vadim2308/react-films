import React from 'react';
import classes from '../styles/App.module.scss';
import Header from './Header/Header';
import MovieList from './Movies/MovieList';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';

type TState = {
  page: number;
  filters: {
    sort_by: string;
  };
};

class App extends React.Component<{}, TState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: 1,
      filters: {
        sort_by: 'popularity.desc',
      },
    };
  }

  onChangePage = (page: number) => {
    this.setState(() => {
      return {
        page,
      };
    });
  };

  onChangeFilter = (event: any) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  render() {
    const { filters, page } = this.state;
    return (
      <div className={classes.main}>
        <Header />
        <div className={classes.container}>
          <div className={classes.main_inner}>
            <Filters filters={filters} onChangeFilter={this.onChangeFilter} />
            <MovieList page={page} filters={filters} />
          </div>
        </div>
        <Pagination page={page} onChangePage={this.onChangePage} />
      </div>
    );
  }
}

export default App;
