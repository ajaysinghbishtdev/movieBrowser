import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import _R from '../../../../R';

const Skeleton: FunctionComponent = () => {
  return (
    <_R.components.SkeletonPlaceholderComponent>
      <View style={styles.top} />
      <View style={styles.list} />
      <View style={styles.heading} />
      <View style={styles.list} />
      <View style={styles.heading} />
      <View style={styles.bottom} />
    </_R.components.SkeletonPlaceholderComponent>
  );
};

const styles = StyleSheet.create({
  top: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6,
    width: '50%',
    borderRadius: 8,
  },
  heading: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 10,
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6,
    width: '50%',
    borderRadius: 8,
  },
  list: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 40,
    width: '100%',
    borderRadius: 8,
  },
  bottom: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    marginBottom: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 5,
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 40,
    width: '100%',
    borderRadius: 8,
  },
});

export default Skeleton;
