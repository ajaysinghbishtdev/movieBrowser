import {movieState} from './movie/reducer';
import {dashboardState} from './dashboard/reducer';

const selectors = {
  movie: movieState,
  dashboard: dashboardState,
};

export default selectors;
