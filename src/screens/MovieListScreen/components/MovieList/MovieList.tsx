import React, {FunctionComponent} from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {useSelector} from 'react-redux';

import Skeleton from '../Skeleton';
import ListItem from './ListItem';
import ListFooter from './ListFooter';

import _R from '../../../../R';
import {IMovie} from '../../../../redux/movie/types';
import {RootState} from '../../../../redux/reducers';
import {useAppDispatch} from '../../../../redux';
import actionCreators from '../../../../redux/actionCreators';

const MovieList: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const {
    loading,
    paginationLoading,
    page,
    total_pages,
    movieListType,
    nowPlayingMovieList,
    popularMovieList,
    topRatedMovieList,
    upcomingMovieList,
  } = useSelector((state: RootState) => state.movie);

  const _onEndReached = () => {
    if (!paginationLoading && total_pages > page) {
      dispatch(actionCreators.movie.fetchMovieListPagination());
    }
  };

  const renderItem = ({item}: {item: IMovie}) => {
    return <ListItem item={item} />;
  };

  const renderListFooterComponent = () => {
    return <ListFooter paginationLoading={paginationLoading} />;
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
      ListFooterComponent={renderListFooterComponent}
      keyExtractor={(item: IMovie) => item.id.toString()}
      onEndReached={_onEndReached}
      onEndReachedThreshold={0.5}
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
