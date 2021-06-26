import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'appState',
  initialState: {
    user: null,
    session_id: null,
    page: 1,
    filters: {
      sort_by: 'popularity.desc',
      year: String(new Date().getFullYear()),
      genres: [],
      filteredGenre: [],
      voite: '',
    },
  },
  reducers: {
    changePage(state, action) {
      state.page = action.payload;
    },
    setFilters(state, action) {
      state.filters[action.payload.name] = action.payload.value;
    },
    downloadGenreFromApi(state, action) {
      state.filters.genres = action.payload;
    },
    changeGenre(state, action) {
      state.filters.filteredGenre = action.payload;
    },
    resetState(state, action) {
      state.page = action.payload.page;
      state.filters = action.payload.filters;
    },
    setSessionId(state, action) {
      state.session_id = action.payload;
    },
    updateUser(state, action) {
      state.user = action.payload;
    },
    onlogOut(state) {
      state.user = null;
      state.session_id = null;
    },
  },
});

export default appSlice.reducer;
export const {
  changePage,
  setFilters,
  downloadGenreFromApi,
  changeGenre,
  resetState,
  setSessionId,
  updateUser,
  onlogOut,
} = appSlice.actions;
