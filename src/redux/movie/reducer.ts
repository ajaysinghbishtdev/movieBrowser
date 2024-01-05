import {createSlice} from '@reduxjs/toolkit';

import {IMovieState} from './types';
import {RootState} from '../reducers';

const initialState: IMovieState = {
  loading: false,
  paginationLoading: false,
  error: null,
  movieListType: null,
  movie: null,
  nowPlayingMovieList: null,
  popularMovieList: null,
  topRatedMovieList: null,
  upcomingMovieList: null,
  page: 0,
  total_pages: 0,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setPaginationLoading(state, action) {
      state.paginationLoading = action.payload;
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
    fetchMovieListPagination() {},
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
    setPage(state, action) {
      state.page = action.payload;
    },
    setTotalpages(state, action) {
      state.total_pages = action.payload;
    },
  },
});

export const {actions, reducer} = movieSlice;

export const movieState = (state: RootState) => state.movie;

export default reducer;
