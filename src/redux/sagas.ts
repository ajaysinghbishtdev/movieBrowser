import {all} from 'redux-saga/effects';

import movieSaga from './movie/saga';
import dashboardSaga from './dashboard/saga';

export default function* rootSaga() {
  yield all([movieSaga(), dashboardSaga()]);
}
