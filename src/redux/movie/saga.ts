import {call, put, select, takeEvery} from 'redux-saga/effects';

import _R from '../../R';
import actionCreators from '../actionCreators';
import api from './service';
import {IMovieListResponse, IMovieState} from './types';
import selectors from '../selectors';

function* fetchMovieListSaga() {
  yield put(actionCreators.movie.setLoading(true));
  yield put(actionCreators.movie.setPage(2));

  const {movieListType}: IMovieState = yield select(selectors.movie);

  try {
    let movieList: IMovieListResponse;

    switch (movieListType) {
      case 'NOW_PLAYING':
        movieList = yield call(api.fetchNowPlaying, 1);
        yield put(
          actionCreators.movie.setNowPlayingMovieList(movieList?.results),
        );
        yield put(actionCreators.movie.setTotalpages(movieList?.total_pages));
        break;
      case 'POPULAR':
        movieList = yield call(api.fetchPopular, 1);
        yield put(actionCreators.movie.setPopularMovieList(movieList?.results));
        yield put(actionCreators.movie.setTotalpages(movieList?.total_pages));
        break;
      case 'TOP_RATED':
        movieList = yield call(api.fetchTopRated, 1);
        yield put(
          actionCreators.movie.setTopRatedMovieList(movieList?.results),
        );
        yield put(actionCreators.movie.setTotalpages(movieList?.total_pages));
        break;
      case 'UPCOMING':
        movieList = yield call(api.fetchUpcoming, 1);
        yield put(
          actionCreators.movie.setUpcomingMovieList(movieList?.results),
        );
        yield put(actionCreators.movie.setTotalpages(movieList?.total_pages));
        break;
      default:
        break;
    }
  } catch (error: any) {
    yield put(
      actionCreators.movie.setError(
        error?.status_message || 'Failed to fetch movie list!',
      ),
    );

    _R.utils.toast.toastError('Failed to fetch movie list!');
  } finally {
    yield put(actionCreators.movie.setLoading(false));
  }
}

function* fetchMovieListPaginationSaga() {
  yield put(actionCreators.movie.setPaginationLoading(true));

  const {
    movieListType,
    page,
    nowPlayingMovieList,
    popularMovieList,
    topRatedMovieList,
    upcomingMovieList,
  }: IMovieState = yield select(selectors.movie);

  yield put(actionCreators.movie.setPage(page + 1));

  try {
    let movieList: IMovieListResponse;

    switch (movieListType) {
      case 'NOW_PLAYING':
        movieList = yield call(api.fetchNowPlaying, page);
        yield put(
          actionCreators.movie.setNowPlayingMovieList(
            nowPlayingMovieList?.concat(movieList?.results),
          ),
        );
        break;
      case 'POPULAR':
        movieList = yield call(api.fetchPopular, page);
        yield put(
          actionCreators.movie.setPopularMovieList(
            popularMovieList?.concat(movieList?.results),
          ),
        );
        break;
      case 'TOP_RATED':
        movieList = yield call(api.fetchTopRated, page);
        yield put(
          actionCreators.movie.setTopRatedMovieList(
            topRatedMovieList?.concat(movieList?.results),
          ),
        );
        break;
      case 'UPCOMING':
        movieList = yield call(api.fetchUpcoming, page);
        yield put(
          actionCreators.movie.setUpcomingMovieList(
            upcomingMovieList?.concat(movieList?.results),
          ),
        );
        break;
      default:
        break;
    }
  } catch (error: any) {
    yield put(
      actionCreators.movie.setError(
        error?.status_message || 'Failed to fetch movie list!',
      ),
    );

    _R.utils.toast.toastError('Failed to fetch movie list!');
  } finally {
    yield put(actionCreators.movie.setPaginationLoading(false));
  }
}

function* movieSaga() {
  yield takeEvery(actionCreators.movie.fetchMovieList, fetchMovieListSaga);
  yield takeEvery(
    actionCreators.movie.fetchMovieListPagination,
    fetchMovieListPaginationSaga,
  );
}

export default movieSaga;
