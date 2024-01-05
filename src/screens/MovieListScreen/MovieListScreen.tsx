import React, {FunctionComponent, useEffect} from 'react';
import {StyleSheet} from 'react-native';

import Header from './components/Header';
import MovieList from './components/MovieList';

import _R from '../../R';
import {useAppDispatch} from '../../redux';
import actionCreators from '../../redux/actionCreators';

const MovieListScreen: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionCreators.movie.fetchMovieList());
  }, [dispatch]);

  return (
    <_R.components.BaseViewComponent
      isGreyBackgroundColor
      isSafeAreaTopView
      isSafeAreaBottomView
      isNormalView
      containerStyle={styles.containerStyle}>
      <Header />
      <MovieList />
    </_R.components.BaseViewComponent>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 0,
  },
});

export default MovieListScreen;
