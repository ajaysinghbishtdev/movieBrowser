import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import _R from '../../../R';

const Skeleton: FunctionComponent = () => {
  return (
    <_R.components.SkeletonPlaceholderComponent>
      <View style={styles.row}>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
      </View>
      <View style={styles.row}>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
      </View>
      <View style={styles.row}>
        <View style={styles.child} />
        <View style={styles.child} />
        <View style={styles.child} />
      </View>
    </_R.components.SkeletonPlaceholderComponent>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  child: {
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 40,
    width: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 23.5,
    borderRadius: 8,
  },
});

export default Skeleton;
