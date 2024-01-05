import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

import _R from '../../../R';
import {RootState} from '../../../redux/reducers';

const Header: FunctionComponent = () => {
  const {movieListType} = useSelector((state: RootState) => state.movie);

  return (
    <_R.components.HeaderComponent
      containerStyle={styles.containerStyle}
      leftComponent
      middleComponent
      middleComponentTypeText
      middleComponentText={
        movieListType === 'NOW_PLAYING'
          ? 'Now Playing'
          : movieListType === 'POPULAR'
          ? 'Popular'
          : movieListType === 'TOP_RATED'
          ? 'Top Rated'
          : 'Upcoming'
      }
    />
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
  },
});

export default Header;
