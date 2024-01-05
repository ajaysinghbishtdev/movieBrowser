import React, {FunctionComponent} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

import Skeleton from '../Skeleton';
import ListItem from './ListItem';

import _R from '../../../../R';
import {IMovie} from '../../../../redux/movie/types';
import {RootState} from '../../../../redux/reducers';

const MovieList: FunctionComponent = () => {
  const {
    loading,
    movieListType,
    nowPlayingMovieList,
    popularMovieList,
    topRatedMovieList,
    upcomingMovieList,
  } = useSelector((state: RootState) => state.movie);

  const renderItem = ({item}: {item: IMovie}) => {
    return <ListItem item={item} />;
  };

  return loading ? (
    <Skeleton />
  ) : (
    <FlatList
      numColumns={3}
      columnWrapperStyle={styles.columnWrapperStyle}
      showsVerticalScrollIndicator={false}
      data={
        movieListType === 'NOW_PLAYING'
          ? nowPlayingMovieList
          : movieListType === 'POPULAR'
          ? popularMovieList
          : movieListType === 'TOP_RATED'
          ? topRatedMovieList
          : upcomingMovieList
      }
      renderItem={renderItem}
      keyExtractor={(item: IMovie) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapperStyle: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 1,
    justifyContent: 'space-between',
  },
});

export default MovieList;
