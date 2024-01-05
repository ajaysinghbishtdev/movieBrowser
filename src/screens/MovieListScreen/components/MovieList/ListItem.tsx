import React, {FunctionComponent} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import _R from '../../../../R';
import {IMovie} from '../../../../redux/dashboard/types';
import urls from '../../../../config/urls';
import actionCreators from '../../../../redux/actionCreators';
import {useAppDispatch} from '../../../../redux';
import {goToScreen} from '../../../../navigators/RootNavigator';
import screens from '../../../../config/screens';

export interface IProps {
  item: IMovie;
}

const ListItem: FunctionComponent<IProps> = ({item}) => {
  const dispatch = useAppDispatch();

  const _onPosterClick = (movie: IMovie) => {
    dispatch(actionCreators.movie.setMovie(movie));
    goToScreen(screens.MOVIE_DETAILS);
  };

  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={0.8}
      onPress={() => _onPosterClick(item)}>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.imageBackgroundImageStyle}
        source={require('../../../../assets/images/placeholder.png')}>
        <Image
          style={styles.image}
          source={{
            uri: urls.TMDB_POSTER_URL + item.poster_path,
          }}
          resizeMode="cover"
        />
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 40,
    width: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 23.5,
    backgroundColor: _R.theme.constants.color.GREY_LIGHTER,
    borderRadius: 8,
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
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 40,
    width: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 23.5,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: _R.theme.constants.color.GREY_LIGHT,
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
});

export default ListItem;
