import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

import theme from '../config/theme';

interface ICustomTextProps {
  style?: any;
  fontSize?: 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6' | 'H7' | 'H8';
  fontWeight?: 'NORMAL' | 'BOLD';
  type?:
    | 'hero'
    | 'header'
    | 'headerRightComponentText'
    | 'title'
    | 'subtitle'
    | 'cardTitle'
    | 'cardSubtitle'
    | 'toast';
  numberOfLines?: number;
  text: string | undefined;
}

const TextComponent: FunctionComponent<ICustomTextProps> = ({
  style,
  fontSize,
  fontWeight,
  type,
  numberOfLines,
  text,
  ...props
}) => {
  const styles = EStyleSheet.create({
    default: {
      fontFamily: theme.constants.fontFamily,
      fontSize: fontSize
        ? theme.constants.fontSize[fontSize]
        : theme.constants.fontSize.H4,
      fontWeight: fontWeight
        ? theme.constants.fontWeight[fontWeight]
        : theme.constants.fontWeight.NORMAL,
    },
    hero: {
      ...theme.globalStyles.hero,
    },
    header: {
      ...theme.globalStyles.header,
    },
    headerRightComponentText: {
      ...theme.globalStyles.headerRightComponentText,
    },
    title: {
      ...theme.globalStyles.title,
    },
    subtitle: {
      ...theme.globalStyles.subtitle,
    },
    cardTitle: {
      ...theme.globalStyles.cardTitle,
    },
    cardSubtitle: {
      ...theme.globalStyles.cardSubtitle,
    },
    toast: {
      ...theme.globalStyles.toast,
    },
  });

  let styleByType = {};

  switch (type) {
    case 'hero':
      styleByType = {...styles.hero};
      break;
    case 'header':
      styleByType = {...styles.header};
      break;
    case 'headerRightComponentText':
      styleByType = {...styles.headerRightComponentText};
      break;
    case 'title':
      styleByType = {...styles.title};
      break;
    case 'subtitle':
      styleByType = {...styles.subtitle};
      break;
    case 'cardTitle':
      styleByType = {...styles.cardTitle};
      break;
    case 'cardSubtitle':
      styleByType = {...styles.cardSubtitle};
      break;
    case 'toast':
      styleByType = {...styles.toast};
      break;
    default:
      styleByType = {...styles.default};
      break;
  }

  return (
    <Text
      style={[
        styleByType,
        fontSize || fontWeight ? styles.default : null,
        style,
      ]}
      numberOfLines={numberOfLines ? numberOfLines : 1}
      {...props}>
      {text || ''}
    </Text>
  );
};

export default TextComponent;
