import React, {FunctionComponent} from 'react';

import Header from './components/Header';

import _R from '../../R';

const MovieListScreen: FunctionComponent = () => {
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

export default MovieListScreen;
