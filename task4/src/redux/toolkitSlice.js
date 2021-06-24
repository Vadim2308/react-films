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
      console.log(action.payload);
      state.page = action.payload;
    },
    //     nextPage(state) {
    //       state.page = state.page + 1;
    //     },
    //     prevPage(state) {
    //       state.page = state.page - 1;
    //     },
  },
});

export default appSlice.reducer;
export const { nextPage, prevPage, changePage } = appSlice.actions;
