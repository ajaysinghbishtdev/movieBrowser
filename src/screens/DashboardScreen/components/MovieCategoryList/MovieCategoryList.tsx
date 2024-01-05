import React, {FunctionComponent} from 'react';
import {StyleSheet, View} from 'react-native';

import {useSelector} from 'react-redux';

// import Skeleton from './Skeleton';

import _R from '../../../../R';
import {RootState} from '../../../../redux/reducers';
import MovieList from '../MovieList';

const Overview: FunctionComponent = () => {
  const {loading, movieCategoryList} = useSelector(
    (state: RootState) => state.dashboard,
  );

  return loading ? null : (
    <View style={styles.container}>
      <View style={[styles.child, styles.nowPlayingContainer]}>
        <_R.components.TextComponent
          style={styles.heading}
          fontSize="H4"
          fontWeight="BOLD"
          text={'Now Playing'}
        />
        <MovieList data={movieCategoryList.nowPlaying || []} />
      </View>
      <View style={[styles.child, styles.popularContainer]}>
        <_R.components.TextComponent
          style={styles.heading}
          fontSize="H4"
          fontWeight="BOLD"
          text={'Popular'}
        />
      </View>
      <View style={[styles.child, styles.topRatedContainer]}>
        <_R.components.TextComponent
          style={styles.heading}
          fontSize="H4"
          fontWeight="BOLD"
          text={'Top Rated'}
        />
      </View>
      <View style={[styles.child, styles.upcomingContainer]}>
        <_R.components.TextComponent
          style={styles.heading}
          fontSize="H4"
          fontWeight="BOLD"
          text={'Upcoming'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  child: {
    marginBottom: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 5,
  },
  nowPlayingContainer: {
    // backgroundColor: _R.theme.constants.color.BLUE,
  },
  popularContainer: {
    backgroundColor: _R.theme.constants.color.RED_DARK,
  },
  topRatedContainer: {
    backgroundColor: _R.theme.constants.color.GREEN,
  },
  upcomingContainer: {
    backgroundColor: _R.theme.constants.color.BLUE_LIGHT,
  },
  heading: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 6,
    marginBottom: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 3,
    color: _R.theme.constants.color.GREY_DARKEST,
  },
});

export default Overview;
