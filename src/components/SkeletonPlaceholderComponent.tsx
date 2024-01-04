import React, {FunctionComponent} from 'react';
import {View} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import EStyleSheet from 'react-native-extended-stylesheet';

import theme from '../config/theme';

interface ISkeletonPlaceholderProps {
  containerStyle?: any;
  children: any;
}

const SkeletonPlaceholderComponent: FunctionComponent<
  ISkeletonPlaceholderProps
> = ({containerStyle, children}) => {
  const styles = EStyleSheet.create({
    container: {},
  });

  return (
    <View style={[styles.container, containerStyle]}>
      <SkeletonPlaceholder
        backgroundColor={theme.constants.color.SKELETON_BACKGROUND}
        highlightColor={theme.constants.color.SKELETON_HIGHLIGHT}>
        {children}
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkeletonPlaceholderComponent;
