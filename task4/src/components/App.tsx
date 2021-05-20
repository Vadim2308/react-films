import React from 'react';
import classes from '../styles/App.module.scss';
import Header from './Header/Header';
import MovieList from './Movies/MovieList';
import Filters from './Filters/Filters';

type TState = {
  filters: {
    sort_by: string;
  };
};

class App extends React.Component<{}, TState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      filters: {
        sort_by: 'popularity.desc',
      },
    };
  }

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
    const { filters } = this.state;
    return (
      <div className={classes.container}>
        <Header />
        <div className={classes.main_inner}>
          <Filters filters={filters} onChangeFilter={this.onChangeFilter} />
          <MovieList filters={filters} />
        </div>
      </div>
    );
  }
}

export default App;
