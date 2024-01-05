import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import {useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Skeleton from './Skeleton';

import _R from '../../../../R';
import {RootState} from '../../../../redux/reducers';
import MovieList from '../MovieList';

const Overview: FunctionComponent = () => {
  const {loading, movieCategoryList} = useSelector(
    (state: RootState) => state.dashboard,
  );

  return loading ? (
    <Skeleton />
  ) : (
    <View style={styles.container}>
      <View style={styles.child}>
        <View style={styles.headingContainer}>
          <_R.components.TextComponent
            style={styles.heading}
            fontSize="H3"
            fontWeight="BOLD"
            text={'Now Playing'}
          />
          <MaterialIcons
            name={'chevron-right'}
            size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6}
            color={_R.theme.constants.color.GREY_DARKEST}
          />
        </View>
        <MovieList data={movieCategoryList.nowPlaying || []} />
      </View>
      <View style={styles.child}>
        <View style={styles.headingContainer}>
          <_R.components.TextComponent
            style={styles.heading}
            fontSize="H3"
            fontWeight="BOLD"
            text={'Popular'}
          />
          <MaterialIcons
            name={'chevron-right'}
            size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6}
            color={_R.theme.constants.color.GREY_DARKEST}
          />
        </View>
        <MovieList data={movieCategoryList.popular || []} />
      </View>
      <View style={styles.child}>
        <View style={styles.headingContainer}>
          <_R.components.TextComponent
            style={styles.heading}
            fontSize="H3"
            fontWeight="BOLD"
            text={'Top Rated'}
          />
          <MaterialIcons
            name={'chevron-right'}
            size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6}
            color={_R.theme.constants.color.GREY_DARKEST}
          />
        </View>
        <MovieList data={movieCategoryList.topRated || []} />
      </View>
      <View style={styles.child}>
        <View style={styles.headingContainer}>
          <_R.components.TextComponent
            style={styles.heading}
            fontSize="H3"
            fontWeight="BOLD"
            text={'Upcoming'}
          />
          <MaterialIcons
            name={'chevron-right'}
            size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6}
            color={_R.theme.constants.color.GREY_DARKEST}
          />
        </View>
        <MovieList data={movieCategoryList.upcoming || []} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    flex: 1,
  },
  child: {
    marginBottom: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    marginVertical: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 3,
    color: _R.theme.constants.color.GREY_DARKEST,
  },
});

export default Overview;
