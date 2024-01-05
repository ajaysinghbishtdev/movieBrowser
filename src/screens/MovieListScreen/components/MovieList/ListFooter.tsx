import React, {FunctionComponent} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

import _R from '../../../../R';

export interface IProps {
  paginationLoading: boolean;
}

const ListFooter: FunctionComponent<IProps> = ({paginationLoading}) => {
  return (
    <View style={styles.container}>
      {paginationLoading ? (
        <ActivityIndicator
          size={'large'}
          color={_R.theme.constants.color.GREY_DARK}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 10,
    alignItems: 'center',
  },
});

export default ListFooter;
