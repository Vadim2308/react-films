import React from 'react';
import classes from '../styles/App.module.scss';
import Header from './Header/Header';
import MovieList from './Movies/MovieList';
import MovieItem from './Movies/MovieList';
import Filters from './Filters/Filters';

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <div className={classes.main_inner}>
        <Filters />
        <MovieList />
      </div>
    </div>
  );
}

export default App;
