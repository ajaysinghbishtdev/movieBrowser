import React, {FunctionComponent} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import MovieCategoryList from './components/MovieCategoryList';

import _R from '../../R';
import {useAppDispatch} from '../../redux';
import actionCreators from '../../redux/actionCreators';

const DashboardScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useFocusEffect(
    React.useCallback(() => {
      dispatch(actionCreators.dashboard.fetchMovieCategoryList());
    }, [dispatch]),
  );

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
