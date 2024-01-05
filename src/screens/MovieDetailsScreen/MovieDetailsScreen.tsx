import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

import Header from './components/Header';
import MovieDetails from './components/MovieDetails';

import _R from '../../R';
import {RootState} from '../../redux/reducers';

const MovieDetailsScreen: FunctionComponent = () => {
  const {movie} = useSelector((state: RootState) => state.movie);

  return (
    <_R.components.BaseViewComponent
      isGreyBackgroundColor
      isSafeAreaTopView
      isSafeAreaBottomView
      isScrollable
      keyboardAwareScrollViewStyle={styles.keyboardAwareScrollViewStyle}>
      <MovieDetails movie={movie} />
      <Header />
    </_R.components.BaseViewComponent>
  );
};

const styles = StyleSheet.create({
  keyboardAwareScrollViewStyle: {
    paddingHorizontal: 0,
  },
});

export default MovieDetailsScreen;
