import React, {FunctionComponent} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createNavigationContainerRef} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';

import MainTab from './MainTab';

import screens from '../config/screens';

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export function goToScreen(name: string, params?: any, merge?: boolean) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params, merge);
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function resetStack(index: number, screenArr: string[]) {
  if (navigationRef.isReady()) {
    let screenObjArr: any[] = [];
    screenArr.forEach(element => {
      screenObjArr.push({name: element});
    });
    navigationRef.dispatch(
      CommonActions.reset({
        index: index,
        routes: screenObjArr,
      }),
    );
  }
}

export const RootNavigator: FunctionComponent = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.MAIN_TAB} component={MainTab} />
    </Stack.Navigator>
  );
};
