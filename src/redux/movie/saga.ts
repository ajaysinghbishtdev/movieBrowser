import {call, put, select, takeEvery} from 'redux-saga/effects';

import _R from '../../R';
import actionCreators from '../actionCreators';
import api from './service';
import {IMovieListResponse, IMovieState} from './types';
import selectors from '../selectors';

function* fetchMovieListSaga() {
  yield put(actionCreators.movie.setLoading(true));

  const {movieListType}: IMovieState = yield select(selectors.movie);

  try {
    let movieList: IMovieListResponse;

    switch (movieListType) {
      case 'NOW_PLAYING':
        movieList = yield call(api.fetchNowPlaying);
        yield put(
          actionCreators.movie.setNowPlayingMovieList(movieList?.results),
        );
        break;
      case 'POPULAR':
        movieList = yield call(api.fetchPopular);
        yield put(actionCreators.movie.setPopularMovieList(movieList?.results));
        break;
      case 'TOP_RATED':
        movieList = yield call(api.fetchTopRated);
        yield put(
          actionCreators.movie.setTopRatedMovieList(movieList?.results),
        );
        break;
      case 'UPCOMING':
        movieList = yield call(api.fetchUpcoming);
        yield put(
          actionCreators.movie.setUpcomingMovieList(movieList?.results),
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
    yield put(actionCreators.movie.setLoading(false));
  }
}

function* movieSaga() {
  yield takeEvery(actionCreators.movie.fetchMovieList, fetchMovieListSaga);
}

export default movieSaga;
