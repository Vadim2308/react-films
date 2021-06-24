import { IFilters, TGenre, TUser } from 'types/global';

type TState = {
  user: TUser | null;
  session_id?: null | string;
  page: number;
  filters: IFilters;
};

const initialState: TState = {
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
};

export default function appReducer(state: TState = initialState, action: any) {
  switch (action.type) {
    case 'CHANGE_PAGE': {
      return {
        page: 2,
      };
    }
    default: {
      return state;
    }
  }
}
