import React, {FunctionComponent} from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import _R from '../../../R';
import TBottomTabIcon from './types';

interface IBottomTabIconProps {
  iconType: TBottomTabIcon;
  iconName: string;
  isFocused: boolean;
}

const BottomTabIcon: FunctionComponent<IBottomTabIconProps> = ({
  iconType,
  iconName,
  isFocused,
}) => {
  return iconType === 'MaterialIcons' ? (
    <MaterialIcons
      name={iconName}
      size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4}
      color={
        isFocused
          ? _R.theme.constants.color.BLUE
          : _R.theme.constants.color.GREY_DARK
      }
    />
  ) : (
    <Ionicons
      name={iconName}
      size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4}
      color={
        isFocused
          ? _R.theme.constants.color.BLUE
          : _R.theme.constants.color.GREY_DARK
      }
    />
  );
};

export default BottomTabIcon;
