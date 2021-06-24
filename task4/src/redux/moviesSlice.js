import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'moviesState',
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});

export default moviesSlice.reducer;
export const { setMovies } = moviesSlice.actions;
