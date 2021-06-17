const initialState = {
  movies: [],
};

export default function moviesReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'SET_ALL_MOVIES': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
