import React from 'react';
import classes from 'styles/App.module.scss';
import Header from './Header/Header';
import MovieList from './Movies/MovieList';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';

type TState = {
  page: number;
  filters: {
    sort_by: string;
    year: string;
    genres: Array<any>;
    with_genre: Array<any>;
  };
};

class App extends React.Component<{}, TState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      page: 1,
      filters: {
        sort_by: 'popularity.desc',
        year: String(new Date().getFullYear()),
        genres: [],
        with_genre: [],
      },
    };
  }

  onChangePage = (page: number) => {
    if (page < 1) {
      this.setState(() => {
        return {
          page: (page = 1),
        };
      });
    }
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

  getGenre = (data: any) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          genres: data.genres,
        },
      };
    });
  };

  handleChangeGanre = (event: any) => {
    const id = event.target.id;
    const { with_genre } = this.state.filters;
    let newGenre: Array<any> = [];
    if (with_genre.includes(id)) {
      newGenre = with_genre.filter((el) => el != id);
    } else {
      newGenre.push(...with_genre, id);
    }
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          with_genre: newGenre,
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
          <Filters
            filters={filters}
            onChangeFilter={this.onChangeFilter}
            getGenre={this.getGenre}
            handleChangeGanre={this.handleChangeGanre}
          />
          <div className={classes.main_inner}>
            <Pagination page={page} onChangePage={this.onChangePage} />
            <MovieList page={page} filters={filters} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
