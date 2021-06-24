const CHANGE_PAGE = 'CHANGE_PAGE';

export const setMovies = (page: any): any => {
  return {
    type: CHANGE_PAGE,
    payload: {
      page: page,
    },
  };
};
