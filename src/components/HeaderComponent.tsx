import React, {FunctionComponent} from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import IconIonicons from 'react-native-vector-icons/Ionicons';

import theme from '../config/theme';
import utils from '../utils';
import TextComponent from './TextComponent';

interface IHeaderProps {
  absolute?: boolean;
  containerStyle?: any;
  leftComponent?: boolean;
  leftComponentOnPress?: any;
  middleComponent?: boolean;
  middleComponentTypeText?: boolean;
  middleComponentText?: string;
  middleComponentTypeSearchBar?: boolean;
  middleComponentSearchBar?: any;
  rightComponentStyle?: any;
  rightComponent?: boolean;
  rightComponentTypeText?: boolean;
  rightComponentText?: string;
  rightComponentTypeTextOnPress?: any;
  rightComponentTypeIcons?: boolean;
  RightComponentFirstIcon?: any;
  rightComponentFirstIconOnPress?: any;
  RightComponentSecondIcon?: any;
  rightComponentSecondIconOnPress?: any;
  rightComponentTypeLanguage?: boolean;
  rightComponentTypeLanguageText?: string;
  rightComponentTypeLanguageOnPress?: any;
}

const HeaderComponent: FunctionComponent<IHeaderProps> = ({
  absolute,
  containerStyle,
  leftComponent,
  leftComponentOnPress,
  middleComponent,
  middleComponentTypeText,
  middleComponentText,
  middleComponentTypeSearchBar,
  middleComponentSearchBar,
  rightComponentStyle,
  rightComponent,
  rightComponentTypeText,
  rightComponentText,
  rightComponentTypeTextOnPress,
  rightComponentTypeIcons,
  RightComponentFirstIcon,
  rightComponentFirstIconOnPress,
  RightComponentSecondIcon,
  rightComponentSecondIconOnPress,
  rightComponentTypeLanguage,
  rightComponentTypeLanguageText,
  rightComponentTypeLanguageOnPress,
}) => {
  const navigation = useNavigation();

  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: utils.ui.widthInPixel(-20),
      flexDirection: 'row',
      height: utils.ui.heightInPixel(63),
    },
    containerAbsolute: {
      paddingHorizontal: utils.ui.widthInPixel(20),
      position: 'absolute',
      top: insets.top,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0)',
    },
    leftComponent: {
      paddingHorizontal: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    middleComponent: {
      flex: 1,
      justifyContent: 'center',
    },
    middleComponentLeftAlign: {
      marginLeft: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
    },
    middleComponentText: {
      textAlign: 'left',
    },
    rightComponent: {
      paddingHorizontal: utils.ui.widthInPixel(20),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightComponentIcon: {
      paddingHorizontal: 0,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    rightIconContainer: {
      paddingHorizontal: utils.ui.widthInPixel(15),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const _goBack = () => {
    navigation.goBack();
  };

  return (
    <View
      style={[
        styles.container,
        absolute ? styles.containerAbsolute : null,
        containerStyle,
      ]}>
      {leftComponent && (
        <TouchableOpacity
          style={styles.leftComponent}
          onPress={leftComponentOnPress ? leftComponentOnPress : _goBack}>
          <IconIonicons
            name="chevron-back"
            size={theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 6}
            color={theme.constants.color.GREY_DARKEST}
          />
        </TouchableOpacity>
      )}
      {middleComponent && middleComponentTypeText && (
        <View
          style={[
            styles.middleComponent,
            !leftComponent ? styles.middleComponentLeftAlign : null,
          ]}>
          <TextComponent
            type="header"
            style={styles.middleComponentText}
            text={middleComponentText}
          />
        </View>
      )}
      {middleComponent && middleComponentTypeSearchBar && (
        <View
          style={[
            styles.middleComponent,
            !leftComponent ? styles.middleComponentLeftAlign : null,
          ]}>
          {middleComponentSearchBar}
        </View>
      )}
      {!middleComponent && <View style={styles.middleComponent} />}
      {rightComponent && rightComponentTypeText && (
        <TouchableOpacity
          style={styles.rightComponent}
          activeOpacity={0.8}
          onPress={rightComponentTypeTextOnPress}>
          <TextComponent
            type="headerRightComponentText"
            text={rightComponentText}
          />
        </TouchableOpacity>
      )}
      {rightComponent && rightComponentTypeIcons && (
        <View style={[styles.rightComponent, styles.rightComponentIcon]}>
          <TouchableOpacity
            style={styles.rightIconContainer}
            onPress={rightComponentFirstIconOnPress}>
            <RightComponentFirstIcon />
          </TouchableOpacity>
          {RightComponentSecondIcon && (
            <TouchableOpacity
              style={styles.rightIconContainer}
              onPress={rightComponentSecondIconOnPress}>
              <RightComponentSecondIcon />
            </TouchableOpacity>
          )}
        </View>
      )}
      {rightComponent && rightComponentTypeLanguage && (
        <TouchableOpacity
          onPress={rightComponentTypeLanguageOnPress}
          style={styles.rightComponent}>
          <Image
            style={{
              marginRight: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH,
              height: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
              width: theme.constants.gutterMargin.GUTTER_MARGIN_WIDTH * 4,
              tintColor: theme.constants.color.BLUE,
            }}
            source={require('../assets/icons/language.png')}
          />
          <TextComponent
            type="headerRightComponentText"
            fontWeight="BOLD"
            text={rightComponentTypeLanguageText}
          />
        </TouchableOpacity>
      )}
      {!rightComponent && (
        <TouchableOpacity
          style={[styles.rightComponent, rightComponentStyle || null]}
        />
      )}
    </View>
  );
};

export default HeaderComponent;
