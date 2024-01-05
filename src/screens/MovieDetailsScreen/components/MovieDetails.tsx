import React, {FunctionComponent} from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import _R from '../../../R';
import {IMovie} from '../../../redux/movie/types';
import urls from '../../../config/urls';

export interface IProps {
  movie: IMovie | null;
}

const MovieDetails: FunctionComponent<IProps> = ({movie}) => {
  return (
    <>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.imageBackgroundImageStyle}
        source={require('../../../assets/images/placeholder.png')}>
        <Image
          style={styles.image}
          source={{
            uri: urls.TMDB_BACKDROP_URL + movie?.backdrop_path,
          }}
          resizeMode="cover"
        />
      </ImageBackground>
      <View style={styles.container}>
        <_R.components.TextComponent
          style={styles.title}
          fontSize="H3"
          fontWeight="BOLD"
          text={movie?.title}
          numberOfLines={2}
        />
        <View style={styles.detailsContainer}>
          <_R.components.TextComponent
            style={styles.releaseDate}
            fontSize="H6"
            fontWeight="BOLD"
            text={movie?.release_date?.slice(0, 4)}
          />
          <FontAwesome
            name={'circle'}
            size={_R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 1.25}
            color={_R.theme.constants.color.GREY_DARKEST}
          />
          <_R.components.TextComponent
            style={styles.vote_average}
            fontSize="H6"
            fontWeight="BOLD"
            text={'IMDb ' + movie?.vote_average?.toString()?.slice(0, 1)}
          />
        </View>
        <_R.components.TextComponent
          style={styles.overview}
          fontSize="H6"
          text={movie?.overview}
          numberOfLines={20}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 50,
    width: '100%',
    backgroundColor: _R.theme.constants.color.GREY_LIGHTER,
    borderWidth: 0.5,
    borderColor: _R.theme.constants.color.GREY_LIGHT,
    shadowColor: _R.theme.constants.color.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  imageBackgroundImageStyle: {
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 50,
    width: '100%',
    resizeMode: 'stretch',
    backgroundColor: _R.theme.constants.color.GREY_LIGHT,
  },
  image: {
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 50,
    width: '100%',
  },
  container: {
    paddingHorizontal: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
  },
  title: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 5,
    color: _R.theme.constants.color.GREY_DARKEST,
  },
  overview: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    color: _R.theme.constants.color.GREY_DARKEST,
  },
  detailsContainer: {
    marginTop: _R.theme.constants.gutterMargin.GUTTER_MARGIN_HEIGHT * 2,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  releaseDate: {
    marginRight: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 1,
    color: _R.theme.constants.color.GREY_DARKEST,
  },
  vote_average: {
    marginLeft: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 1,
    color: _R.theme.constants.color.GREY_DARKEST,
  },
});

export default MovieDetails;
