import {createSlice} from '@reduxjs/toolkit';

import {IMovieState} from './types';
import {RootState} from '../reducers';

const initialState: IMovieState = {
  loading: false,
  error: null,
  movieListType: null,
  movie: null,
  nowPlayingMovieList: null,
  popularMovieList: null,
  topRatedMovieList: null,
  upcomingMovieList: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setMovieListType(state, action) {
      state.movieListType = action.payload;
    },
    setMovie(state, action) {
      state.movie = action.payload;
    },
    fetchMovieList() {},
    setNowPlayingMovieList(state, action) {
      state.nowPlayingMovieList = action.payload;
    },
    setPopularMovieList(state, action) {
      state.popularMovieList = action.payload;
    },
    setTopRatedMovieList(state, action) {
      state.topRatedMovieList = action.payload;
    },
    setUpcomingMovieList(state, action) {
      state.upcomingMovieList = action.payload;
    },
  },
});

export const {actions, reducer} = movieSlice;

export const movieState = (state: RootState) => state.movie;

export default reducer;
