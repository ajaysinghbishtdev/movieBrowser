import {createSlice} from '@reduxjs/toolkit';

import {IMovieState} from './types';
import {RootState} from '../reducers';

const initialState: IMovieState = {
  movie: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovie(state, action) {
      state.movie = action.payload;
    },
  },
});

export const {actions, reducer} = movieSlice;

export const movieState = (state: RootState) => state.movie;

export default reducer;
