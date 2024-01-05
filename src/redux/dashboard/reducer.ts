import {createSlice} from '@reduxjs/toolkit';

import {IDashboardState} from './types';
import {RootState} from '../reducers';

const initialState: IDashboardState = {
  loading: false,
  error: null,
  movieCategoryList: {
    nowPlaying: null,
    popular: null,
    topRated: null,
    upcoming: null,
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    fetchMovieCategoryList() {},
    setMovieCategoryList(state, action) {
      state.movieCategoryList = action.payload;
    },
  },
});

export const {actions, reducer} = dashboardSlice;

export const dashboardState = (state: RootState) => state.dashboard;

export default reducer;
