import React, {FunctionComponent} from 'react';

import {useFocusEffect} from '@react-navigation/native';

import _R from '../../R';
import Header from './components/Header';
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
      isNormalView>
      <Header />
    </_R.components.BaseViewComponent>
  );
};

export default DashboardScreen;
