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
  },
});

export default appSlice.reducer;
export const { changePage, setFilters } = appSlice.actions;
