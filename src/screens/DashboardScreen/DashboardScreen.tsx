import React, {FunctionComponent} from 'react';

import _R from '../../R';
import Header from './components/Header';

const DashboardScreen: FunctionComponent = () => {
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
