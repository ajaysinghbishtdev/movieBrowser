import React, {FunctionComponent} from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import {NavigationContainer} from '@react-navigation/native';

import _R from './R';
import {navigationRef, RootNavigator} from './navigators/RootNavigator';

// Always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({$rem: _R.utils.ui.screenWidth / 380});

const App: FunctionComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootNavigator />
    </NavigationContainer>
  );
};

export default App;
