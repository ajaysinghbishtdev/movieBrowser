import {combineReducers} from '@reduxjs/toolkit';

import movieReducer from './movie/reducer';
import dashboardReducer from './dashboard/reducer';

const rootReducer = combineReducers({
  movie: movieReducer,
  dashboard: dashboardReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
