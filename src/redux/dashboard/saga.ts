import {all, call, put, takeEvery} from 'redux-saga/effects';

import _R from '../../R';
import actionCreators from '../actionCreators';
import api from './service';

function* fetchMovieCategoryListSaga() {
  yield put(actionCreators.dashboard.setLoading(true));

  try {
    const [nowPlayingList, popularList, topRatedList, upcomingList]: [
      any,
      any,
      any,
      any,
    ] = yield all([
      call(api.fetchNowPlaying),
      call(api.fetchPopular),
      call(api.fetchTopRated),
      call(api.fetchUpcoming),
    ]);

    yield put(
      actionCreators.dashboard.setMovieCategoryList({
        nowPlaying: nowPlayingList?.results?.slice(0, 10),
        popular: popularList?.results?.slice(0, 10),
        topRated: topRatedList?.results?.slice(0, 10),
        upcoming: upcomingList?.results?.slice(0, 10),
      }),
    );
  } catch (error: any) {
    yield put(
      actionCreators.dashboard.setError(
        error?.status_message || 'Failed to fetch movie category list!',
      ),
    );

    _R.utils.toast.toastError('Failed to fetch movie category list!');
  } finally {
    yield put(actionCreators.dashboard.setLoading(false));
  }
}

function* dashboardSaga() {
  yield takeEvery(
    actionCreators.dashboard.fetchMovieCategoryList,
    fetchMovieCategoryListSaga,
  );
}

export default dashboardSaga;
