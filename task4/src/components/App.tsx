import React from 'react';
import classes from 'styles/App.module.scss';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import MovieList from './Movies/MovieList';
import Filters from './Filters/Filters';
import Pagination from './Pagination/Pagination';
import { IFilters, TGenre } from 'types/global';

type TState = {
  page: number;
  filters: IFilters;
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
        filteredGenre: [],
        voite: '',
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

  resetState = () => {
    this.setState((prevState: TState) => {
      return {
        page: 1,
        filters: {
          sort_by: 'popularity.desc',
          year: String(new Date().getFullYear()),
          genres: prevState.filters.genres,
          filteredGenre: [],
          voite: '',
        },
      };
    });
  };

  onChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    console.log(name, value);
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          [name]: value,
        },
      };
    });
  };

  setGenre = (data: TGenre[]) => {
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          genres: data,
        },
      };
    });
  };

  handleChangeGanre = (id: string) => {
    const { filteredGenre } = this.state.filters;
    let newGenre: string[] = [];
    if (filteredGenre.includes(id)) {
      newGenre = filteredGenre.filter((el) => el !== id);
    } else {
      newGenre.push(...filteredGenre, id);
    }
    this.setState((prevState) => {
      return {
        filters: {
          ...prevState.filters,
          filteredGenre: newGenre,
        },
      };
    });
  };

  render() {
    const { filters, page } = this.state;
    return (
      <div className={classes.main}>
        <div className={classes.container}>
          <Header />
          <Slider />
          <Filters
            filters={filters}
            onChangeFilter={this.onChangeFilter}
            setGenre={this.setGenre}
            handleChangeGanre={this.handleChangeGanre}
            resetState={this.resetState}
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
