import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import _R from '../../../../R';
import {IMovie} from '../../../../redux/dashboard/types';
import urls from '../../../../config/urls';

export interface IProps {
  item: IMovie;
}

const ListItem: FunctionComponent<IProps> = ({item}) => {
  return (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{
          uri: urls.TMDB_POSTER_URL + item.poster_path,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginRight: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 1,
    height: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 40,
    width: _R.theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 25,
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
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
  },
});

export default ListItem;
