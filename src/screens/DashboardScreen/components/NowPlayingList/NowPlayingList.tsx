import React, {FunctionComponent} from 'react';
import {FlatList} from 'react-native';

import ListItem from './ListItem';

import {IMovie} from '../../../../redux/dashboard/types';

export interface IProps {
  data: IMovie[];
}

const NowPlayingList: FunctionComponent<IProps> = ({data}) => {
  const renderItem = ({item}: {item: IMovie}) => {
    return <ListItem item={item} />;
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item: IMovie) => item.id.toString()}
    />
  );
};

export default NowPlayingList;
