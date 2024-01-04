import React, {FunctionComponent} from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EStyleSheet from 'react-native-extended-stylesheet';

import BottomTabIcon from './BottomTabIcon';
import DashboardScreen from '../../screens/DashboardScreen';

import _R from '../../R';
import TBottomTabIcon from './BottomTabIcon/types';
import screens from '../../config/screens';

const Tab = createBottomTabNavigator();

const MainTab: FunctionComponent = () => {
  const _bottomTabIcon = (
    iconType: TBottomTabIcon,
    iconName: string,
    isFocused: boolean,
  ) => (
    <BottomTabIcon
      iconType={iconType}
      iconName={iconName}
      isFocused={isFocused}
    />
  );

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {...styles.tabBarLabelStyle},
        tabBarActiveTintColor: _R.theme.constants.color.BLUE,
        tabBarInactiveTintColor: _R.theme.constants.color.GREY_DARK,
        tabBarStyle: styles.tabBarStyle,
      }}>
      <Tab.Screen
        name={screens.DASHBOARD}
        component={DashboardScreen}
        options={{
          tabBarIcon: ({focused}) =>
            _bottomTabIcon('MaterialIcons', 'dashboard', focused),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = EStyleSheet.create({
  tabBarLabelStyle: {..._R.theme.globalStyles.tabBarLabel},
  tabBarStyle: {
    backgroundColor: _R.theme.constants.color.GREY_LIGHTER,
    shadowColor: _R.theme.constants.color.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default MainTab;
