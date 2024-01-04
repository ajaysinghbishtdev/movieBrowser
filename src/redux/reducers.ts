import {combineReducers} from '@reduxjs/toolkit';

import tmdbReducer from './tmdb/reducer';

const rootReducer = combineReducers({
  tmdb: tmdbReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
