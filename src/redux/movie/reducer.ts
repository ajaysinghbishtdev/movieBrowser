import {createSlice} from '@reduxjs/toolkit';

import {IMovieState} from './types';
import {RootState} from '../reducers';

const initialState: IMovieState = {
  movieListType: null,
  movie: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieListType(state, action) {
      state.movieListType = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
  },
});

export const {actions, reducer} = movieSlice;

export const movieState = (state: RootState) => state.movie;

export default reducer;
