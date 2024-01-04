import {all} from 'redux-saga/effects';

import tmdbSaga from './tmdb/saga';

export default function* rootSaga() {
  yield all([tmdbSaga()]);
}
