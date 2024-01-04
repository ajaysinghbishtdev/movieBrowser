import React, {FunctionComponent} from 'react';

import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';

import _R from './R';
import {persistor, store} from './redux';
import {navigationRef, RootNavigator} from './navigators/RootNavigator';

// Always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({$rem: _R.utils.ui.screenWidth / 380});

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
