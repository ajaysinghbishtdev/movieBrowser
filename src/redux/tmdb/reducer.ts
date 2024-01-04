import {createSlice} from '@reduxjs/toolkit';

import {ITmdbState} from './types';
import {RootState} from '../reducers';

const initialState: ITmdbState = {
  loading: false,
};

const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const {actions, reducer} = tmdbSlice;

export const tmdbState = (state: RootState) => state.tmdb;

export default reducer;
