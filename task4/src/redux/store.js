// import { createStore, combineReducers } from 'redux';
// import moviesReducer from './reducers/movies';
// import appReducer from './reducers/app';

// const rootReducer = combineReducers({
//   moviesState: moviesReducer,
//   appState: appReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

// export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import moviesSlice from './moviesSlice';
import loginSlice from './loginSlice';

const rootReducer = combineReducers({
  App: appSlice,
  Movies: moviesSlice,
  Login: loginSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
