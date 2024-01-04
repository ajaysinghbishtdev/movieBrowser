import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import Toast, {ToastConfigParams} from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/MaterialIcons';

import _R from './R';
import {persistor, store} from './redux';
import {navigationRef, RootNavigator} from './navigators/RootNavigator';

// Always call EStyleSheet.build() even if you don't use global variables!
EStyleSheet.build({$rem: _R.utils.ui.screenWidth / 380});

const styles = EStyleSheet.create({
  toastContainer: {
    ..._R.theme.globalStyles.toastContainer,
  },
});

const toastConfig = {
  success: (params: ToastConfigParams<any>) => (
    <View style={styles.toastContainer}>
      <Icon
        name="check-circle"
        style={{..._R.theme.globalStyles.toastIcon}}
        size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4}
        color="green"
      />
      <_R.components.TextComponent
        style={{..._R.theme.globalStyles.toastText}}
        type="toast"
        text={params.text1}
        numberOfLines={3}
      />
    </View>
  ),
  error: (params: ToastConfigParams<any>) => (
    <View style={styles.toastContainer}>
      <Icon
        name="cancel"
        style={{..._R.theme.globalStyles.toastIcon}}
        size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4}
        color="red"
      />
      <_R.components.TextComponent
        style={{..._R.theme.globalStyles.toastText}}
        type="toast"
        text={params.text1}
        numberOfLines={3}
      />
    </View>
  ),
  info: (params: ToastConfigParams<any>) => (
    <View style={styles.toastContainer}>
      <Icon
        name="info"
        style={{..._R.theme.globalStyles.toastIcon}}
        size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4}
        color="grey"
      />
      <_R.components.TextComponent
        style={{..._R.theme.globalStyles.toastText}}
        type="toast"
        text={params.text1}
        numberOfLines={3}
      />
    </View>
  ),
};

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationContainer>
        <Toast config={toastConfig} />
      </PersistGate>
    </Provider>
  );
};

export default App;
