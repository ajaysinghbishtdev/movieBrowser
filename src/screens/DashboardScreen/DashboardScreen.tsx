import React, {FunctionComponent, useEffect} from 'react';

import MovieCategoryList from './components/MovieCategoryList';

import _R from '../../R';
import {useAppDispatch} from '../../redux';
import actionCreators from '../../redux/actionCreators';

const DashboardScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionCreators.dashboard.fetchMovieCategoryList());
  }, [dispatch]);

  return (
    <_R.components.BaseViewComponent
      isGreyBackgroundColor
      isSafeAreaTopView
      isSafeAreaBottomView
      isScrollable>
      <MovieCategoryList />
    </_R.components.BaseViewComponent>
  );
};

export default DashboardScreen;
